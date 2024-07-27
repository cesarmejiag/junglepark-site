import { toCurrency } from "@/lib/utils";
import BlockContent from "../objects/BlockContent";
import styles from "./Plans.module.css";

type PlanType = {
  _key: string;
  _type: string;
  title: string;
  description: string;
  price120: number;
  price60: number;
};

type PlansType = {
  _key: string;
  _type: string;
  title: string;
  body: any;
  plans: PlanType[];
  cta: any;
  ctas: any;
};

const PlanItem = ({ price, type }: { price: number; type: number }) => (
  <div className="flex flex-col items-center pl-[10%]">
    <div className={styles.planTime}>{type === 1 ? "60" : "120"} minutos</div>
    <div className={styles.planPrice}>{toCurrency(price)}</div>
    <button className={styles.planBtn}>Comprar</button>
  </div>
);

const Plan = ({ title, description, price60, price120 }: PlanType) => {
  return (
    <div className={`${styles.plan} py-5 px-12 mb-12 flex items-center`}>
      <div className="grow">
        <h3 className={styles.planTitle}>{title}</h3>
        {description?.length > 0 && (
          <div className={styles.planDesc}>{description}</div>
        )}
      </div>
      <PlanItem price={price60} type={1} />
      <PlanItem price={price120} type={2} />
    </div>
  );
};

export default function Plans({ title, body, plans }: PlansType) {
  return (
    <section className={`${styles.plans} py-52`}>
      <div className="xl:container mx-auto px-5">
        <div className="flex">
          <div className="w-[365px]">
            <h1 className={`${styles.plansTitle} mb-10`}>{title}</h1>
            <div className={styles.plansBody}>
              <BlockContent blocks={body} />
            </div>
          </div>
          <div className="grow pl-4">
            {plans && plans.map((plan) => <Plan {...plan} key={plan._key} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
