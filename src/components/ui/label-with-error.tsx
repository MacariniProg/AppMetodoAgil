import { FieldError } from "react-hook-form";
import { Label } from "./label";

interface LabelWithErrorProps {
  htmlFor: string;
  title: string;
  error: FieldError | undefined;
  optional?: boolean;
}

export function LabelWithError({
  htmlFor,
  title,
  error,
  optional,
}: LabelWithErrorProps) {
  return (
    <div className="flex justify-between">
      <Label htmlFor={htmlFor}>
        {title}{" "}
        {optional && (
          <span className="text-[.7rem] text-neutral-600">(Opcional)</span>
        )}
      </Label>
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </div>
  );
}
