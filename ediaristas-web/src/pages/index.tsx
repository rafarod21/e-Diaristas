import Head from "next/head";

import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
      />

      <UserInformation
        name="Rafael Rodrigues"
        picture="https://github.com/rafarod21.png"
        rating={3}
        description="Maringá"
      />
    </div>
  );
}
