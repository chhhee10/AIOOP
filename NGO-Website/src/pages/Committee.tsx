import { UserRound, Building, Phone as PhoneIcon } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import PageHeader from '@/components/PageHeader';

// dialog components used for image enlargement
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

const members = [
  {
    name: 'Vinod Kumar Gupta',
    nameHi: 'विनोद कुमार गुप्ता',
    role: 'President',
    roleHi: 'अध्यक्ष',
    phone: '9415486514',
    image: '/Member_Pictures/vinod-kumar-gupta.jpeg',
  },
  {
    name: 'P.P. Dixit',
    nameHi: 'पी०पी० दीक्षित',
    role: 'Vice President',
    roleHi: 'उपाध्यक्ष',
    phone: '9415486514',
    image: '/Member_Pictures/pp-dixit.jpeg',
  },
  {
    name: 'R.N. Srivastava',
    nameHi: 'आर०एन० श्रीवास्तव',
    role: 'Vice President',
    roleHi: 'उपाध्यक्ष',
    phone: '9369253458',
    image: '/Member_Pictures/rn-srivastava.jpeg',
  },
  {
    name: 'Om Prakash Srivastava',
    nameHi: 'ओम प्रकाश श्रीवास्तव',
    role: 'General Secretary',
    roleHi: 'महासचिव',
    phone: '9415477344',
    image: '/Member_Pictures/om-prakash-srivastava.jpeg',
  },
  {
    name: 'Ram Khilawan Vishwakarma',
    nameHi: 'राम खिलावन विश्वकर्मा',
    role: 'Finance Secretary',
    roleHi: 'वित्त सचिव',
    phone: '7388620019',
    image: '/Member_Pictures/ram-khilawan-vishwakarma.jpeg',
  },
  {
    name: 'B.P. Singh',
    nameHi: 'बी०पी० सिंह',
    role: 'Administrative Secretary',
    roleHi: 'प्रशासनिक सचिव',
    phone: '6393805598',
    image: '/Member_Pictures/bp-singh.jpg',
  },
  {
    name: 'Satish Prakash',
    nameHi: 'सतीश प्रकाश',
    role: 'PRO',
    roleHi: 'पी०आर०ओ०',
    phone: '9653049184',
    image: '/Member_Pictures/satish-prakash.jpeg',
  },
  {
    name: 'Surendra Kumar Mishra',
    nameHi: 'सुरेन्द्र कुमार मिश्रा',
    role: 'Auditor',
    roleHi: 'ऑडिटर',
    phone: '9415438164',
    image: '/Member_Pictures/skm.jpeg',
  },
  {
    name: 'Kamal Kumar Verma',
    nameHi: 'कमल कुमार वर्मा',
    role: 'Accountant',
    roleHi: 'लेखाकार',
    phone: '9415040505',
    image: '/Member_Pictures/kamal-kumar-verma.jpeg',
  },
  {
    name: 'Masood Ahmad Alvi',
    nameHi: 'मसूद अहमद अल्वी',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '8318652010',
    image: '/Member_Pictures/masood-ahmed-alvi.jpeg',
  },
  {
    name: 'Dr. Rakesh Kumar',
    nameHi: 'डा० राकेश कुमार',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '9415440871',
    image: '/Member_Pictures/dr-rakesh-kumar.jpeg',
  },
  {
    name: 'Aniruddh Singh',
    nameHi: 'अनिरूद्ध सिंह',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '9415796440',
    image: '/Member_Pictures/anirudh-singh.jpeg',
  },
  {
    name: 'V.K. Singh',
    nameHi: 'वी०के० सिंह',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '9918555523',
    image: '/Member_Pictures/vk-singh.jpeg',
  },
  {
    name: 'Vijay Anand Dariyabadi',
    nameHi: 'विजय आनन्द दरियाबादी',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '8081924191',
    image: '/Member_Pictures/vijay-anand-dariyabadi.jpeg',
  },
  {
    name: 'Surendra Kumar Shukla',
    nameHi: 'सुरेन्द्र कुमार शुक्ला',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '9411663190',
    image: '/Member_Pictures/sks.jpeg',
  },
  {
    name: 'Shyam Kumar Sinha',
    nameHi: 'श्याम कुमार सिन्हा',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '8318262415',
    image: '/Member_Pictures/shyam-kumar-sinha.jpeg',
  },
  {
    name: 'Vijay Kumar Tiwari',
    nameHi: 'विजय कुमार तिवारी',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '9450124662',
    image: '/Member_Pictures/vijay-kumar-tiwari.jpeg',
  },
  {
    name: 'Purushottam Narayan Mishra',
    nameHi: 'पुरूषोत्तम नारायण मिश्रा',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '9415478055',
    image: '/Member_Pictures/purushottam-narayan-mishra.jpeg',
  },
  {
    name: 'Swaroop Narayan Nigam',
    nameHi: 'स्वरूप नारायण निगम',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '9453287576',
    image: '/Member_Pictures/snn.jpeg',
  },
  {
    name: 'Baljeet Singh',
    nameHi: 'बलजीत सिंह',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '9621048266',
    image: '/Member_Pictures/baljeet-singh.jpeg',
  },
  {
    name: 'Rajeev Pradhan',
    nameHi: 'राजीव प्रधान',
    role: 'Executive Member',
    roleHi: 'सदस्य कार्यकारिणी',
    phone: '9450138009',
    image: '/Member_Pictures/rajeev-pradhan.jpeg',
  },
];


export default function Committee() {
  const { language, t } = useLanguage();

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
      <PageHeader title={t.committee.title} description={t.committee.desc} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 pb-20">
        {members.map((m, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-4 mb-5 md:mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-accent flex items-center justify-center shrink-0 overflow-hidden cursor-pointer">
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={language === 'hi' ? m.nameHi : m.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <UserRound className="w-12 h-12 md:w-14 md:h-14 text-primary" />
                    )}
                  </div>
                </DialogTrigger>
                {m.image && (
                  <DialogContent className="p-0 max-w-md">
                    <img
                      src={m.image}
                      alt={language === 'hi' ? m.nameHi : m.name}
                      className="w-full h-auto rounded"
                    />
                  </DialogContent>
                )}
              </Dialog>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-base md:text-lg text-foreground truncate">
                  {language === 'hi' ? m.nameHi : m.name}
                </h3>
                <div className="flex items-center gap-1 text-primary text-xs md:text-sm mt-1">
                  <Building className="w-4 h-4 shrink-0" />
                  <span className="truncate">{language === 'hi' ? m.roleHi : m.role}</span>
                </div>
              </div>
            </div>
            {m.phone && (
              <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm border-t border-border pt-4 md:pt-5">
                <PhoneIcon className="w-4 h-4 shrink-0" />
                <span className="truncate">{m.phone}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
