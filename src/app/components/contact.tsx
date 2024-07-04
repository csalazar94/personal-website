import IconButton from "./icon-button";
import Github from "../assets/logos/github";
import GitLab from "../assets/logos/gitlab";
import Mail from "../assets/logos/mail";

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
        <GitLab />
      </IconButton>
    </div>
  );
}
