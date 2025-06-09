
import { Slider } from "@/components/ui/slider";

interface CompetencySliderProps {
  label: string;
  value: number;
  onChange: (value: number[]) => void;
}

const CompetencySlider = ({ label, value, onChange }: CompetencySliderProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-base font-medium">{label}</span>
          <span className="text-sm text-muted-foreground">{value}/10</span>
        </div>
      )}
      <Slider
        defaultValue={[value]}
        max={10}
        step={1}
        onValueChange={onChange}
        className="w-full"
      />
    </div>
  );
};

export default CompetencySlider;
