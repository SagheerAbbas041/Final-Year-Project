import {SectionTitle} from "../common/sectionTitle";
import {SingleFeature} from "./singleFeature";
import {FeaturesData} from "./featuresData";

export const Features = () => {
  return (
    <>
   
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container ">
        <div className="text-black font-bold text-center text-5xl mb-8"><h4>Course Offered</h4> </div>
        <div className="text-center text-base text-body-color mb-8">University of Gujrat Mandi Bahauddin Campus</div>
          <SectionTitle
            title="Course Offered"
            paragraph="University of Gujrat Mandi Bahauddin Campus"
            center
          />
          

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {FeaturesData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};