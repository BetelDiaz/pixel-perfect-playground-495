import { useState, type FormEvent } from "react";

export type Field = { name: string; label: string; type?: string; required?: boolean; options?: string[]; hint?: string };

export function SimpleForm({ fields, submit, success }: { fields: Field[]; submit: string; success: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    for (const f of fields) {
      const v = String(fd.get(f.name) ?? "").trim();
      if (f.required && (!v || (f.type === "checkbox" && v !== "on"))) errs[f.name] = "Este campo es obligatorio.";
      else if (f.type === "email" && v && !/^\S+@\S+\.\S+$/.test(v)) errs[f.name] = "Introduce un correo válido.";
      else if (f.type === "password" && v && v.length < 8) errs[f.name] = "Mínimo 8 caracteres.";
    }
    setErrors(errs);
    if (!Object.keys(errs).length) setDone(true);
  }

  if (done)
    return (
      <div role="status" className="rounded-3xl p-8 text-center glass">
        <p className="text-2xl font-bold">✓ Recibido</p>
        <p className="mt-2 text-muted-foreground">{success}</p>
        <p className="mt-4 text-xs text-muted-foreground">Modo demostración: el envío real se activará al conectar el sistema de cuentas. No se ha guardado ningún dato.</p>
      </div>
    );

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4 rounded-3xl p-8 glass">
      {fields.map((f) => (
        <div key={f.name}>
          {f.type === "checkbox" ? (
            <label className="flex gap-2 text-sm">
              <input type="checkbox" name={f.name} className="mt-1 accent-violet" aria-invalid={!!errors[f.name]} />
              {f.label}
            </label>
          ) : (
            <>
              <label htmlFor={f.name} className="mb-1 block text-sm font-semibold">{f.label}{f.required && " *"}</label>
              {f.options ? (
                <select id={f.name} name={f.name} className="w-full rounded-xl border border-input bg-popover px-3 py-2.5 focus:outline-2 focus:outline-ring">
                  <option value="">Selecciona…</option>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input id={f.name} name={f.name} type={f.type ?? "text"} aria-invalid={!!errors[f.name]} className="w-full rounded-xl border border-input bg-popover px-3 py-2.5 focus:outline-2 focus:outline-ring" />
              )}
            </>
          )}
          {f.hint && <p className="mt-1 text-xs text-muted-foreground">{f.hint}</p>}
          {errors[f.name] && <p className="mt-1 text-sm font-medium text-destructive">⚠ {errors[f.name]}</p>}
        </div>
      ))}
      <button className="mt-2 rounded-full px-6 py-3 font-semibold btn-primary">{submit}</button>
    </form>
  );
}
