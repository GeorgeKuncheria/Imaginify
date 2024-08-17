import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { getImageById } from "@/lib/actions/image.actions";

const Page = async ({ params: { id } }: SearchParamProps) => {
  const user= await currentUser();

  if (!user?.id) redirect("/sign-in");

  const userData = await getUserById(user.id);
  const image = await getImageById(id);

  const transformation =
    transformationTypes[image.transformationType as TransformationTypeKey];

  return (
    <>
      <Header title={transformation.title} subTitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Update"
          userId={userData._id}
          type={image.transformationType as TransformationTypeKey}
          creditBalance={userData.creditBalance}
          config={image.config}
          data={image}
        />
      </section>
    </>
  );
};

export default Page;