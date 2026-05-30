export default function CTAButton({
  children = "Let's work together!"
}) {
  const whatsappUrl =
    "https://wa.me/2348118060797?text=Hello%20Olasubomi%20Stephanie%2C%20I%27d%20like%20to%20work%20with%20you.";

  return (
    <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
