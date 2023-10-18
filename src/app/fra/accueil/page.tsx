import HomeComponent from "../../../components/home/page";
import { i18n } from "../../../i18n";

export default function Home() {
  i18n.locale = "fra";
  return (
    <>
      <HomeComponent />
    </>
  );
}
