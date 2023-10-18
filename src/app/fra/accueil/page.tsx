import HomeComponent from "../../../components/home/page";
import { i18n } from "../../../i18n";
import tran from "../../../../public/locales/fra/home.json";

export default function Home() {
  i18n.locale = "fra";
  i18n.store(tran);

  return (
    <>
      <HomeComponent />
    </>
  );
}
