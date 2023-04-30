import Dropzone from "./dropzone";

const fileZoneComponents = [
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
