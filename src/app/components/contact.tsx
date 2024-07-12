import IconButton from "./icon-button";
import { Mail, Github, Gitlab } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="flex gap-4">
      <IconButton href="mailto:camilosalazar94@gmail.com">
        <Mail />
      </IconButton>
      <IconButton href="https://github.com/csalazar94" target="_blank">
        <Github />
      </IconButton>
      <IconButton href="https://gitlab.com/csalazar94" target="_blank">
        <Gitlab />
      </IconButton>
    </div>
  );
}
