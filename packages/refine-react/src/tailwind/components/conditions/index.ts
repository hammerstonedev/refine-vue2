import type { Condition, CriterionBlueprintItem } from "refine-core/types";

export type ConditionComponentName =
  | "BooleanCondition"
  | "DateCondition"
  | "DateCondition"
  | "DateCondition"
  | "NumericCondition"
  | "OptionCondition"
  | "TextCondition";

export interface BaseConditionProps {
  criterion: CriterionBlueprintItem;
  condition: Condition;
}