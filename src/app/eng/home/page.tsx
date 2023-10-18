import HomeComponent from "../../../components/home/page";
import { i18n } from "../../../i18n";
import tran from "../../../../public/locales/eng/home.json";

export default function Home() {
  i18n.store(tran);
  return (
    <>
      <HomeComponent />
    </>
  );
}
