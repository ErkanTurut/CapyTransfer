import Dropzone from "./dropzone";
import { ComponentType } from "@/types/components.types";
const fileZoneComponents: ComponentType[] = [
  {
    component: <Dropzone />,
    label: "Upload",
  },
  {
    component: <div> Settings</div>,
    label: "Settings",
  },
  {
    component: <div> Send </div>,
    label: "Send",
  },
];

export default fileZoneComponents;
