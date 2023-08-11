import "./sociallinks.module.css";

const SocialLink = ({ icon, hrf }) => {
  return (
    <a href={hrf} target="_blank">
      <ion-icon name={icon} />
    </a>
  );
};
export default SocialLink;
