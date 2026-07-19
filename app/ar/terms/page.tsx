import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  alternates: staticRouteAlternates("ar", "/terms")
};

export default function ArTermsPage() {
  const copy = getCopy("ar");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">الشروط</p>
        <h1>{copy.terms.title}</h1>

        <section className="policy-section">
          <h2>1. الغرض من التطبيق</h2>
          <p>
            يساعد IDPhoto Pro في إعداد صور الجواز والتأشيرة والهوية والإقامة من خلال قوالب مقاسات، تحرير محلي، فحوصات على الجهاز، وتصدير رقمي أو للطباعة.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. ليس خدمة حكومية</h2>
          <p>
            IDPhoto Pro ليس تابعاً لأي حكومة أو سفارة أو مركز تأشيرات أو بوابة رسمية. التطبيق أداة لإعداد الصور فقط.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. المتطلبات والقبول النهائي</h2>
          <p>
            قد يعرض التطبيق إرشادات مبنية على متطلبات منشورة، لكن المتطلبات قد تتغير حسب الدولة ونوع المستند وقناة التقديم. يجب مراجعة المصدر الرسمي قبل الإرسال النهائي، ولا يضمن التطبيق قبول الصورة.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. الشراء</h2>
          <p>
            قد يوفر التطبيق فتحاً مدى الحياة كعملية شراء داخل التطبيق عبر Apple. تتم عمليات الشراء والاسترداد وفق سياسات App Store.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. التواصل</h2>
          <p>
            للدعم، راسلنا على <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
