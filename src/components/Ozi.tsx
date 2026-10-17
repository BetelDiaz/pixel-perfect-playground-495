import ozi from "@/assets/ozi.png";

export function Ozi({ size = 120, message, className = "" }: { size?: number; message?: string; className?: string }) {
  return (
    <div className={`flex items-end gap-3 ${className}`}>
      <img src={ozi} width={size} height={size} alt="OZI, el robot guía" className="float drop-shadow-xl" style={{ width: size, height: size }} />
      {message && (
        <p className="mb-6 max-w-xs rounded-2xl rounded-bl-none px-4 py-3 text-sm font-medium border-iri">{message}</p>
      )}
    </div>
  );
}
