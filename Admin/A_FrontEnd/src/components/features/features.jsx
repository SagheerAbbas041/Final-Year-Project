import {SectionTitle} from "../common/sectionTitle";
import {SingleFeature} from "./singleFeature";
import {FeaturesData} from "./featuresData";

export const Features = () => {
  return (
    <>
      <section
        id="about"
        className="bg-primary/[.05] py-16 md:py-20 lg:py-28 "
      >
        <div className="container">
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

// export const Features = () => {
//   return (
//     <>
//       <section id="about" className="bg-primary/[.05] py-16 md:py-20 lg:py-28">
//         <div className="container">
//           <h2 className="text-center text-3xl font-bold">Course Offered</h2>
//           <p className="text-center text-lg">University of Gujrat Mandi Bahauddin Campus</p>

//           <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
//             {/* Your feature items */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
