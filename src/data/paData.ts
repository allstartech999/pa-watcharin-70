export interface AlbumPhoto {
  id: string;
  title: string;
  category: string;
  caption?: string;
  description?: string;
  imageUrl: string;
  tag?: string;
}

export interface StandardAspect {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  icon: string;
  badgeColor: string;
  themeColor: {
    bg: string;
    border: string;
    badge: string;
    accent: string;
    iconBg: string;
  };
  summary: string;
  keyPoints: string[];
  photos: AlbumPhoto[];
}

export interface VocationalGrade {
  grade: string;
  title: string;
  tagline: string;
  category: string;
  color: {
    badge: string;
    border: string;
    gradient: string;
  };
  details: string;
  skills: string[];
  mainPhoto: string;
  subPhotos: string[];
}

export const PA_DATA = {
  meta: {
    fiscalYear: "2570",
    roundPeriod: "1 ตุลาคม 2569 – 30 กันยายน 2570",
    agreementType: "ข้อตกลงในการพัฒนางาน (Performance Agreement : PA)",
    submissionTitle: "แฟ้มภาพและรายงานผลการพัฒนางานตามข้อตกลง (PA)",
    submissionSubtitle: "สำหรับข้าราชการครูและบุคลากรทางการศึกษา ตำแหน่งผู้บริหารสถานศึกษา วิทยฐานะชำนาญการพิเศษ",
  },

  director: {
    name: "นายวัชรินทร์ ติดวงษา",
    position: "ผู้อำนวยการโรงเรียนโพนงามพิทยานุกูล",
    academicStanding: "วิทยฐานะชำนาญการพิเศษ",
    school: "โรงเรียนโพนงามพิทยานุกูล",
    affiliation: "สำนักงานเขตพื้นที่การศึกษามัธยมศึกษามหาสารคาม",
    affiliationShort: "สพม. มหาสารคาม",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=700",
    quote: "มุ่งมั่นพัฒนาการศึกษา สร้างสถานศึกษาปลอดภัย พัฒนานักเรียนรอบด้านด้วยนวัตกรรม PPK Safe & Care Model และทักษะอาชีพตามหลักปรัชญาของเศรษฐกิจพอเพียง",
  },

  downloads: {
    fullReportUrl: "https://drive.google.com/file/d/1lwyp1i80Unff8mpx70NJ52q_qCshnfdp/view?usp=sharing",
    reportBookUrl: "https://drive.google.com/file/d/1lwyp1i80Unff8mpx70NJ52q_qCshnfdp/view?usp=sharing",
    spmLink: "https://spmmsk.go.th",
  },

  stats: [
    { label: "อัลบั้มมาตรฐานตำแหน่ง", value: "๕ ด้าน", sub: "ภาพกิจกรรมหลักฐานครบถ้วน" },
    { label: "อัลบั้มประเด็นท้าทาย", value: "๒ ประเด็น", sub: "PPK Safe & ทักษะอาชีพ" },
    { label: "อัลบั้มทักษะอาชีพ", value: "๖ ระดับชั้น", sub: "ม.๑ - ม.๖ ลงมือปฏิบัติจริง" },
    { label: "หลักฐานเชิงประจักษ์", value: "๑๐๐%", sub: "ครอบคลุมทุกตัวชี้วัด ว.PA" },
  ],

  standards: [
    {
      id: 1,
      number: "ด้านที่ ๑",
      title: "ด้านการบริหารวิชาการและความเป็นผู้นำทางวิชาการ",
      subtitle: "ยกระดับคุณภาพวิชาการ หลักสูตรทันสมัย ส่งเสริมนวัตกรรมการเรียนรู้ และการประกันคุณภาพ SAR",
      icon: "GraduationCap",
      badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
      themeColor: {
        bg: "from-sky-50 via-white to-blue-50/50",
        border: "border-sky-200",
        badge: "bg-sky-100 text-sky-800 border-sky-300",
        accent: "text-sky-600",
        iconBg: "bg-gradient-to-tr from-sky-400 to-blue-500 text-white",
      },
      summary: "จัดทำแผนพัฒนาคุณภาพการศึกษา พัฒนาหลักสูตรสถานศึกษาสอดคล้องบริบทท้องถิ่น นิเทศกัลยาณมิตร และจัดทำรายงาน SAR ประกันคุณภาพการศึกษา",
      keyPoints: [
        "จัดทำแผนพัฒนาคุณภาพการศึกษาและปรับปรุงหลักสูตรสถานศึกษาให้มีความทันสมัย",
        "ส่งเสริมครูจัดการเรียนรู้เชิงรุก (Active Learning) ด้วยสื่อนวัตกรรมและเทคโนโลยีดิจิทัล",
        "นิเทศ กำกับ ติดตามการจัดการเรียนรู้อย่างเป็นระบบและกัลยาณมิตร",
        "จัดทำรายงานการประเมินตนเองของสถานศึกษา (SAR) สู่มาตรฐานการประกันคุณภาพ",
      ],
      photos: [
        {
          id: "s1-1",
          title: "การประชุมปรับปรุงหลักสูตรสถานศึกษาและแผนพัฒนาคุณภาพการศึกษา",
          category: "ด้านวิชาการ",
          caption: "ผู้อำนวยการเป็นประธานการประชุมเชิงปฏิบัติการพัฒนาหลักสูตรสถานศึกษาร่วมกับคณะครูและผู้ทรงคุณวุฒิ",
          imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=900",
          tag: "หลักสูตร & แผนพัฒนา",
        },
        {
          id: "s1-2",
          title: "การนิเทศชั้นเรียนเชิงรุก (Active Learning Classroom Supervision)",
          category: "ด้านวิชาการ",
          caption: "ตรวจเยี่ยมนิเทศการจัดกิจกรรมการเรียนรู้แบบ Active Learning ในห้องเรียนเพื่อส่งเสริมสมรรถนะผู้เรียน",
          imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900",
          tag: "นิเทศภายใน",
        },
        {
          id: "s1-3",
          title: "การประเมินตนเองของสถานศึกษา (SAR Presentation)",
          category: "ด้านวิชาการ",
          caption: "ประชุมรายงานผลการประเมินตนเองของสถานศึกษา เพื่อเตรียมความพร้อมประกันคุณภาพภายนอก",
          imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900",
          tag: "ประกันคุณภาพ SAR",
        },
        {
          id: "s1-4",
          title: "การส่งเสริมการใช้สื่อนวัตกรรมและเทคโนโลยีดิจิทัลทางการศึกษา",
          category: "ด้านวิชาการ",
          caption: "สนับสนุนห้องเรียนดิจิทัลและสื่อการสอนทันสมัย ยกระดับผลสัมฤทธิ์ทางการเรียน",
          imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=900",
          tag: "สื่อนวัตกรรมดิจิทัล",
        },
      ],
    },
    {
      id: 2,
      number: "ด้านที่ ๒",
      title: "ด้านการบริหารจัดการสถานศึกษา",
      subtitle: "บริหารโปร่งใสตามหลักธรรมาภิบาล 4 ฝ่าย และระบบดูแลช่วยเหลือนักเรียน 5 ขั้นตอน",
      icon: "Building2",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      themeColor: {
        bg: "from-emerald-50 via-white to-teal-50/50",
        border: "border-emerald-200",
        badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
        accent: "text-emerald-600",
        iconBg: "bg-gradient-to-tr from-emerald-400 to-teal-500 text-white",
      },
      summary: "จัดทำคู่มือการบริหาร 4 ฝ่าย (วิชาการ, บุคคล, งบประมาณ, ทั่วไป) พร้อมขับเคลื่อนระบบดูแลช่วยเหลือนักเรียน 5 ขั้นตอนอย่างมีประสิทธิภาพ",
      keyPoints: [
        "จัดทำคู่มือบริหารและคำสั่งมอบหมายงาน ๔ ฝ่ายตามหลักธรรมาภิบาล",
        "บริหารงบประมาณและพัสดุอย่างโปร่งใส ตรวจสอบได้ คุ้มค่า",
        "ส่งเสริมระบบดูแลช่วยเหลือนักเรียน ๕ ขั้นตอนครบ ๑๐๐%",
        "สร้างเครือข่ายผู้ปกครองและเสริมสร้างคุณลักษณะอันพึงประสงค์",
      ],
      photos: [
        {
          id: "s2-1",
          title: "การประชุมมอบหมายภาระงานและการบริหารจัดการ ๔ ฝ่าย",
          category: "ด้านการบริหาร",
          caption: "ประชุมชี้แจงคู่มือปฏิบัติงานและมอบหมายหน้าที่ฝ่ายวิชาการ บุคคล งบประมาณ และบริหารทั่วไป",
          imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900",
          tag: "บริหาร ๔ ฝ่าย",
        },
        {
          id: "s2-2",
          title: "กิจกรรมตรวจเยี่ยมบ้านและคัดกรองระบบดูแลช่วยเหลือนักเรียน",
          category: "ด้านการบริหาร",
          caption: "ผู้อำนวยการร่วมกับครูที่ปรึกษาลงพื้นที่เยี่ยมบ้านนักเรียนเพื่อช่วยเหลือและดูแลเป็นรายบุคคล",
          imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=900",
          tag: "ระบบดูแล ๕ ขั้นตอน",
        },
        {
          id: "s2-3",
          title: "การพัฒนาภูมิทัศน์และสภาพแวดล้อมเพื่อการเรียนรู้ที่ปลอดภัย",
          category: "ด้านการบริหาร",
          caption: "ปรับปรุงภูมิทัศน์ อาคารสถานที่ และระบบสาธารณูปโภคให้เอื้อต่อการเรียนรู้อย่างมีความสุข",
          imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=900",
          tag: "อาคารสถานที่",
        },
        {
          id: "s2-4",
          title: "การประชุมเครือข่ายผู้ปกครองและส่งเสริมวินัยเชิงบวก",
          category: "ด้านการบริหาร",
          caption: "จัดตั้งคณะกรรมการเครือข่ายผู้ปกครองระดับชั้นเรียนและระดับโรงเรียนเพื่อร่วมมือกันดูแลผู้เรียน",
          imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=900",
          tag: "เครือข่ายผู้ปกครอง",
        },
      ],
    },
    {
      id: 3,
      number: "ด้านที่ ๓",
      title: "ด้านการบริหารการเปลี่ยนแปลงเชิงกลยุทธ์และนวัตกรรม",
      subtitle: "ริเริ่มขับเคลื่อนนวัตกรรม PPK MODEL สู่ความเป็นเลิศในทุกมิติ",
      icon: "Sparkles",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      themeColor: {
        bg: "from-amber-50 via-white to-orange-50/50",
        border: "border-amber-200",
        badge: "bg-amber-100 text-amber-800 border-amber-300",
        accent: "text-amber-600",
        iconBg: "bg-gradient-to-tr from-amber-400 to-orange-500 text-white",
      },
      summary: "กำหนดวิสัยทัศน์ พันธกิจ กลยุทธ์ร่วมกับชุมชน และพัฒนานวัตกรรม PPK MODEL ควบคู่กับเทคโนโลยีดิจิทัลยกระดับการบริหาร",
      keyPoints: [
        "กำหนดยุทธศาสตร์และแผนปฏิบัติการร่วมกับคณะกรรมการสถานศึกษา",
        "ขับเคลื่อนนวัตกรรมการบริหาร 'PPK MODEL' สู่การปฏิบัติจริง",
        "นำระบบสารสนเทศดิจิทัลมาใช้ในการติดตามผลงานสถานศึกษา",
        "ประเมินและสะท้อนผลการดำเนินงานเพื่อปรับปรุงนวัตกรรมต่อเนื่อง",
      ],
      photos: [
        {
          id: "s3-1",
          title: "การสัมมนากำหนดยุทธศาสตร์และนวัตกรรม PPK MODEL",
          category: "นวัตกรรมและกลยุทธ์",
          caption: "ร่วมกับคณะครูและบุคลากรระดมความคิดเห็นเพื่อขับเคลื่อนนวัตกรรม PPK MODEL สู่ทุกกลุ่มงาน",
          imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=900",
          tag: "PPK MODEL",
        },
        {
          id: "s3-2",
          title: "การจัดนิทรรศการแสดงผลงานนวัตกรรมการจัดการศึกษา",
          category: "นวัตกรรมและกลยุทธ์",
          caption: "จัดแสดงผลงานนวัตกรรมของครูและนักเรียน นำเสนอต่อคณะกรรมการและผู้ตรวจราชการ",
          imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=900",
          tag: "นิทรรศการผลงาน",
        },
        {
          id: "s3-3",
          title: "การนำระบบดิจิทัลมาบริหารจัดการข้อมูลและสารสนเทศโรงเรียน",
          category: "นวัตกรรมและกลยุทธ์",
          caption: "พัฒนาระบบฐานข้อมูลอิเล็กทรอนิกส์และแดชบอร์ดช่วยการตัดสินใจของฝ่ายบริหาร",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
          tag: "Digital School",
        },
        {
          id: "s3-4",
          title: "การติดตามประเมินผลสัมฤทธิ์ของโครงการเชิงกลยุทธ์",
          category: "นวัตกรรมและกลยุทธ์",
          caption: "นิเทศติดตามความก้าวหน้าโครงการตามแผนปฏิบัติการประจำปีงบประมาณ 2570",
          imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=900",
          tag: "ประเมินผลกลยุทธ์",
        },
      ],
    },
    {
      id: 4,
      number: "ด้านที่ ๔",
      title: "ด้านการบริหารงานชุมชนและเครือข่าย",
      subtitle: "ประสานพลัง 'บ้าน วัด โรงเรียน' และภาคีเครือข่าย ระดมทรัพยากรพัฒนาการศึกษา",
      icon: "Users2",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
      themeColor: {
        bg: "from-rose-50 via-white to-pink-50/50",
        border: "border-rose-200",
        badge: "bg-rose-100 text-rose-800 border-rose-300",
        accent: "text-rose-600",
        iconBg: "bg-gradient-to-tr from-rose-400 to-pink-500 text-white",
      },
      summary: "สร้างภาคีเครือข่ายร่วมพัฒนา ประชุมคณะกรรมการสถานศึกษาและผู้ปกครอง ให้บริการวิชาการแก่ชุมชน และระดมทรัพยากรการศึกษา",
      keyPoints: [
        "สร้างเครือข่ายความร่วมมือกับชุมชน อปท. และหน่วยงานภาครัฐในพื้นที่",
        "จัดประชุมคณะกรรมการสถานศึกษาขั้นพื้นฐานอย่างน้อยภาคเรียนละ ๑ ครั้ง",
        "ระดมทรัพยากร ทุนการศึกษา และอุปกรณ์เพื่อการเรียนรู้จากศิษย์เก่าและชุมชน",
        "นำครูและนักเรียนร่วมกิจกรรมจิตอาสาและบริการวิชาการแก่ท้องถิ่น",
      ],
      photos: [
        {
          id: "s4-1",
          title: "การประชุมคณะกรรมการสถานศึกษาขั้นพื้นฐาน",
          category: "ชุมชนและเครือข่าย",
          caption: "ประชุมร่วมกับคณะกรรมการสถานศึกษาเพื่อรายงานผลและขอความเห็นชอบแผนพัฒนาคุณภาพ",
          imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=900",
          tag: "กรรมการสถานศึกษา",
        },
        {
          id: "s4-2",
          title: "พิธีมอบทุนการศึกษาและการระดมทรัพยากรเพื่อผู้เรียน",
          category: "ชุมชนและเครือข่าย",
          caption: "ประสานงานกับผู้ใหญ่ใจดี ศิษย์เก่า และภาคีเครือข่าย มอบทุนการศึกษาแก่นักเรียนเรียนดีแต่ขาดแคลน",
          imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=900",
          tag: "ระดมทุนการศึกษา",
        },
        {
          id: "s4-3",
          title: "กิจกรรมจิตอาสาพัฒนาชุมชนและทำนุบำรุงศิลปวัฒนธรรม",
          category: "ชุมชนและเครือข่าย",
          caption: "นำคณะครูและนักเรียนร่วมกิจกรรมบำเพ็ญประโยชน์ ณ วัดและชุมชนโพนงาม",
          imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=900",
          tag: "จิตอาสาชุมชน",
        },
        {
          id: "s4-4",
          title: "การลงนามความร่วมมือ (MOU) ทางวิชาการกับภาคีภายนอก",
          category: "ชุมชนและเครือข่าย",
          caption: "สร้างข้อตกลงร่วมมือกับวิทยาลัยและสถานประกอบการเพื่อส่งเสริมทักษะอาชีพนักเรียน",
          imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900",
          tag: "MOU ภาคีเครือข่าย",
        },
      ],
    },
    {
      id: 5,
      number: "ด้านที่ ๕",
      title: "ด้านการพัฒนาตนเองและวิชาชีพ",
      subtitle: "ผู้นำชุมชนการเรียนรู้ทางวิชาชีพ (PLC) และการส่งเสริมทักษะภาษาไทย 'อ่านเขียนดี มีใจรัก'",
      icon: "Award",
      badgeColor: "bg-violet-100 text-violet-800 border-violet-300",
      themeColor: {
        bg: "from-violet-50 via-white to-purple-50/50",
        border: "border-violet-200",
        badge: "bg-violet-100 text-violet-800 border-violet-300",
        accent: "text-violet-600",
        iconBg: "bg-gradient-to-tr from-violet-400 to-purple-500 text-white",
      },
      summary: "อบรมพัฒนาตนเองต่อเนื่อง เป็นผู้นำ PLC ให้คำปรึกษาครู เผยแพร่นวัตกรรม และส่งเสริมทักษะภาษาไทยแก่นักเรียนทุกคน",
      keyPoints: [
        "เข้ารับการอบรมพัฒนาวิชาชีพผู้บริหารสถานศึกษาสมัยใหม่อย่างสม่ำเสมอ",
        "เป็นผู้นำและส่งเสริมกระบวนการชุมชนการเรียนรู้ทางวิชาชีพ (PLC) ในโรงเรียน",
        "เผยแพร่นวัตกรรมการจัดการเรียนรู้และให้คำปรึกษาแก่เพื่อนครู",
        "จัดกิจกรรม 'อ่านเขียนดี มีใจรัก' ส่งเสริมการอ่านออกเขียนได้ ๑๐๐%",
      ],
      photos: [
        {
          id: "s5-1",
          title: "การประชุมชุมชนการเรียนรู้ทางวิชาชีพ (PLC : Professional Learning Community)",
          category: "พัฒนาตนเองและวิชาชีพ",
          caption: "ผู้อำนวยการนำการแลกเปลี่ยนเรียนรู้เพื่อร่วมกันแก้ไขปัญหาการจัดการเรียนรู้ของครูผู้สอน",
          imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=900",
          tag: "ผู้นำ PLC",
        },
        {
          id: "s5-2",
          title: "การเข้าร่วมอบรมและพัฒนาสมรรถนะผู้บริหารยุคดิจิทัล",
          category: "พัฒนาตนเองและวิชาชีพ",
          caption: "เข้าร่วมอบรมเชิงปฏิบัติการพัฒนาภาวะผู้นำทางวิชาการและเทคโนโลยีการบริหารจัดการ",
          imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=900",
          tag: "อบรมพัฒนาตนเอง",
        },
        {
          id: "s5-3",
          title: "กิจกรรมส่งเสริมทักษะภาษาไทย 'อ่านเขียนดี มีใจรัก'",
          category: "พัฒนาตนเองและวิชาชีพ",
          caption: "นิเทศติดตามโครงการรักการอ่านและการคัดกรองทักษะการอ่านออกเขียนได้ของนักเรียน",
          imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=900",
          tag: "อ่านเขียนดี มีใจรัก",
        },
        {
          id: "s5-4",
          title: "การเผยแพร่นวัตกรรมและให้คำปรึกษาแก่สถานศึกษาเครือข่าย",
          category: "พัฒนาตนเองและวิชาชีพ",
          caption: "ร่วมบรรยายและถ่ายทอดประสบการณ์การบริหารจัดการสถานศึกษาแก่โรงเรียนใกล้เคียง",
          imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=900",
          tag: "เผยแพร่นวัตกรรม",
        },
      ],
    },
  ],

  challenges: {
    challenge1: {
      number: "ประเด็นท้าทายที่ ๑",
      title: "การพัฒนารูปแบบการบริหารจัดการสถานศึกษาปลอดภัยเชิงรุก บูรณาการร่วมกับระบบดูแลช่วยเหลือนักเรียนด้วย PPK Safe & Care Model",
      shortTitle: "PPK Safe & Care Model (สถานศึกษาปลอดภัยเชิงรุก)",
      objective: "สร้างรูปแบบการบริหารจัดการสถานศึกษาปลอดภัยเชิงรุก บูรณาการร่วมกับระบบดูแลช่วยเหลือนักเรียน 5 ขั้นตอน ป้องกันความเสี่ยงรอบด้านทั้งกายภาพ สังคม และไซเบอร์",
      systemFlow: [
        {
          step: "INPUT",
          title: "ปัจจัยนำเข้า",
          icon: "Layers",
          color: "bg-sky-500 text-white",
          items: [
            "นโยบายสถานศึกษาปลอดภัย กระทรวงศึกษาธิการ & สพฐ.",
            "ครู บุคลากร คณะกรรมการสถานศึกษา และภาคีเครือข่าย",
            "งบประมาณและทรัพยากรสนับสนุนความปลอดภัย",
            "ข้อมูลนักเรียนรายบุคคลและจุดเสี่ยงในสถานศึกษา",
          ],
        },
        {
          step: "PROCESS",
          title: "กระบวนการดำเนินงาน",
          icon: "Cpu",
          color: "bg-indigo-500 text-white",
          items: [
            "ประเมินความเสี่ยงและกำหนดมาตรการเชิงรุก (Plan)",
            "ขับเคลื่อน PPK Safe & Care สู่ห้องเรียนและพื้นที่ (Do)",
            "ตรวจติดตามระบบดูแล ๕ ขั้นตอนอย่างต่อเนื่อง (Check)",
            "สะท้อนผลและถอดบทเรียนผ่านกระบวนการ PLC (Action)",
          ],
        },
        {
          step: "OUTPUT",
          title: "ผลผลิตเชิงประจักษ์",
          icon: "CheckCircle2",
          color: "bg-emerald-500 text-white",
          items: [
            "คู่มือและแผนเผชิญเหตุสถานศึกษาปลอดภัยครบทุกด้าน",
            "นักเรียนได้รับการดูแล คัดกรอง และช่วยเหลือครบ ๑๐๐%",
            "เกิดเครือข่ายความปลอดภัยร่วมกับ สภ. และ รพ.สต.",
            "สภาพแวดล้อม อาคารสถานที่ ปลอดภัย น่าอยู่ น่าเรียนรู้",
          ],
        },
        {
          step: "OUTCOME",
          title: "ผลลัพธ์ระยะยาว",
          icon: "Trophy",
          color: "bg-amber-500 text-white",
          items: [
            "นักเรียนมีสุขภาพกาย สุขภาพจิตสมบูรณ์ เรียนรู้อย่างมีความสุข",
            "อุบัติเหตุ ความรุนแรง และสารเสพติดเป็นศูนย์ (Zero Incident)",
            "ผู้ปกครองและชุมชนมีความเชื่อมั่น ไว้วางใจในสถานศึกษาในระดับสูงมาก",
          ],
        },
        {
          step: "FEEDBACK",
          title: "การสะท้อนกลับและพัฒนา",
          icon: "Repeat",
          color: "bg-rose-500 text-white",
          items: [
            "รับฟังเสียงสะท้อนจากนักเรียน ผู้ปกครอง และชุมชน",
            "นำข้อมูลมาต่อยอดเพื่อความยั่งยืนของ PPK Safe & Care Model",
          ],
        },
      ],
      results: [
        "นักเรียนโรงเรียนโพนงามพิทยานุกูลทุกคน (100%) ได้รับการดูแลความปลอดภัยอย่างทั่วถึง",
        "การคัดกรองนักเรียนและการเยี่ยมบ้านครบ 100% สอดคล้องตามเกณฑ์ สพฐ.",
        "ไม่มีเหตุการณ์ความรุนแรงหรืออุบัติเหตุร้ายแรงเกิดขึ้นในรอบปีงบประมาณ 2570",
      ],
      photos: [
        {
          id: "c1-1",
          title: "การซักซ้อมแผนเผชิญเหตุและการรักษาความปลอดภัยในสถานศึกษา",
          category: "PPK Safe & Care",
          caption: "จัดกิจกรรมซักซ้อมแผนเผชิญเหตุอัคคีภัยและความปลอดภัยร่วมกับเจ้าหน้าที่กู้ชีพและตำรวจในพื้นที่",
          imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=900",
          tag: "ซักซ้อมแผนเผชิญเหตุ",
        },
        {
          id: "c1-2",
          title: "การตรวจความปลอดภัยอาคารสถานที่และจุดเสี่ยงภายในโรงเรียน",
          category: "PPK Safe & Care",
          caption: "ผู้อำนวยการนำทีมงานตรวจเช็กระบบไฟฟ้า ประตูรั้ว และกล้องวงจรปิดรอบบริเวณสถานศึกษา",
          imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=900",
          tag: "ตรวจเช็กจุดเสี่ยง",
        },
        {
          id: "c1-3",
          title: "การบูรณาการระบบดูแลช่วยเหลือนักเรียนและให้คำปรึกษาเชิงบวก",
          category: "PPK Safe & Care",
          caption: "จัดห้องให้คำปรึกษา (Counseling Room) เพื่อดูแลสุขภาพจิตและช่วยเหลือนักเรียนที่มีความวิตกกังวล",
          imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=900",
          tag: "ดูแลสุขภาพจิต",
        },
        {
          id: "c1-4",
          title: "ความร่วมมือภาคีเครือข่ายสถานศึกษาปลอดภัย (MOU สภ. และ รพ.สต.)",
          category: "PPK Safe & Care",
          caption: "ประสานงานร่วมกับตำรวจชุมชนและเจ้าหน้าที่สาธารณสุขในการจัดระเบียบรอบรั้วโรงเรียน",
          imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900",
          tag: "ภาคีความปลอดภัย",
        },
      ],
    },

    challenge2: {
      number: "ประเด็นท้าทายที่ ๒",
      title: "การริเริ่มพัฒนาการจัดกิจกรรมการเรียนรู้ที่ส่งเสริมทักษะอาชีพของนักเรียน บูรณาการตามหลักปรัชญาของเศรษฐกิจพอเพียง",
      shortTitle: "ส่งเสริมทักษะอาชีพนักเรียนบูรณาการเศรษฐกิจพอเพียง (ม.๑ - ม.๖)",
      objective: "ส่งเสริมให้นักเรียนทุกระดับชั้นได้ลงมือปฏิบัติจริง มีทักษะอาชีพ ทักษะชีวิต และนำหลักปรัชญาของเศรษฐกิจพอเพียงไปประยุกต์ใช้สร้างรายได้ระหว่างเรียน",
      grades: [
        {
          grade: "มัธยมศึกษาปีที่ ๑",
          title: "ม.๑ จักสานไม้ไผ่",
          tagline: "สืบสานภูมิปัญญาท้องถิ่น สู่งานฝีมือทรงคุณค่า",
          category: "หัตถกรรมพื้นบ้าน",
          color: {
            badge: "bg-amber-100 text-amber-900 border-amber-300",
            border: "border-amber-200",
            gradient: "from-amber-400 to-yellow-500",
          },
          details: "เรียนรู้คุณค่าของไผ่ในท้องถิ่น ฝึกทักษะการเหลา ตอก และสานเครื่องใช้พื้นบ้าน เช่น ชะลอม ตะกร้า และของที่ระลึก สร้างสมาธิและความคิดสร้างสรรค์",
          skills: ["ภูมิปัญญาท้องถิ่น", "ความประณีต", "แปรรูปวัสดุธรรมชาติ"],
          mainPhoto: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=900",
          subPhotos: [
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
          ],
        },
        {
          grade: "มัธยมศึกษาปีที่ ๒",
          title: "ม.๒ คนเอาถ่าน",
          tagline: "พลังงานชีวมวล ไบโอชาร์ รักษ์โลกสร้างมูลค่า",
          category: "นวัตกรรมและสิ่งแวดล้อม",
          color: {
            badge: "bg-slate-100 text-slate-800 border-slate-300",
            border: "border-slate-200",
            gradient: "from-slate-600 to-slate-800",
          },
          details: "การแปรรูปเศษกิ่งไม้และวัสดุเหลือใช้ทางการเกษตรเป็นถ่านไร้ควัน ถ่านดูดกลิ่น และถ่านไบโอชาร์บำรุงดิน เรียนรู้กระบวนการเผาแบบชีวมวลรักษ์สิ่งแวดล้อม",
          skills: ["วิทยาศาสตร์ประยุกต์", "การบริหารของเสีย", "พลังงานสะอาด"],
          mainPhoto: "https://images.unsplash.com/photo-1520690214124-2405c5217036?auto=format&fit=crop&q=80&w=900",
          subPhotos: [
            "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1520690214124-2405c5217036?auto=format&fit=crop&q=80&w=600",
          ],
        },
        {
          grade: "มัธยมศึกษาปีที่ ๓",
          title: "ม.๓ ตีไข่ใส่สี",
          tagline: "เบเกอรี่แสนอร่อย ทักษะแปรรูปอาหารพร้อมสร้างอาชีพ",
          category: "คหกรรมและการประกอบอาหาร",
          color: {
            badge: "bg-rose-100 text-rose-800 border-rose-300",
            border: "border-rose-200",
            gradient: "from-rose-400 to-pink-500",
          },
          details: "ฝึกทักษะการทำขนม เค้ก เบเกอรี่ และของหวานสร้างสรรค์ ฝึกชั่ง ตวง วัด การตกแต่งหน้าขนม และสุขอนามัยในการประกอบอาหารตามมาตรฐาน",
          skills: ["การคำนวณต้นทุน", "สุขอนามัยอาหาร", "ความคิดสร้างสรรค์"],
          mainPhoto: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=900",
          subPhotos: [
            "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
          ],
        },
        {
          grade: "มัธยมศึกษาปีที่ ๔",
          title: "ม.๔ Break Set & Snack Box",
          tagline: "บริการจัดชุดอาหารว่างและเครื่องดื่มสำหรับงานสัมมนา",
          category: "การจัดการบริการและการโรงแรม",
          color: {
            badge: "bg-orange-100 text-orange-800 border-orange-300",
            border: "border-orange-200",
            gradient: "from-orange-400 to-amber-500",
          },
          details: "เรียนรู้การจัดเซ็ตอาหารว่าง บรรจุภัณฑ์สวยงาม การบริการต้อนรับ และการบริหารคำสั่งซื้อสำหรับงานประชุม สัมมนา และกิจกรรมภายในโรงเรียน",
          skills: ["การจัดอาหารบริการ", "การออกแบบ Packaging", "งานประสานงาน"],
          mainPhoto: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=900",
          subPhotos: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
          ],
        },
        {
          grade: "มัธยมศึกษาปีที่ ๕",
          title: "ม.๕ น้ำดื่ม พ.พ.ก.",
          tagline: "โรงงานน้ำดื่มมาตรฐาน สะอาด ปลอดภัย ใส่ใจสุขภาพ",
          category: "การผลิตเชิงอุตสาหกรรมในสถานศึกษา",
          color: {
            badge: "bg-cyan-100 text-cyan-800 border-cyan-300",
            border: "border-cyan-200",
            gradient: "from-cyan-400 to-blue-500",
          },
          details: "เรียนรู้ระบบกรองน้ำระบบ RO & UV การควบคุมคุณภาพน้ำดื่ม การบรรจุขวด ติดฉลากตรา พ.พ.ก. และการบริหารระบบสต็อกสินค้าเพื่อจำหน่ายในสถานศึกษา",
          skills: ["การควบคุมคุณภาพ (QC)", "การควบคุมเครื่องจักร", "ระบบสต็อก"],
          mainPhoto: "https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&q=80&w=900",
          subPhotos: [
            "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&q=80&w=600",
          ],
        },
        {
          grade: "มัธยมศึกษาปีที่ ๖",
          title: "ม.๖ ตลาดนัดเฮฮา",
          tagline: "ผู้ประกอบการรุ่นเยาว์ การตลาดดิจิทัลและจำหน่ายสินค้าจริง",
          category: "การเป็นผู้ประกอบการและการตลาด",
          color: {
            badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
            border: "border-emerald-200",
            gradient: "from-emerald-400 to-teal-500",
          },
          details: "บูรณาการทักษะการเป็นผู้ประกอบการ (Young Entrepreneur) การเปิดตลาดนัดชุมชน การขายผ่านสื่อออนไลน์ บัญชีรายรับ-รายจ่าย และการกระจายรายได้",
          skills: ["ทักษะการเจรจาและการขาย", "การตลาดดิจิทัล", "การจัดทำบัญชี"],
          mainPhoto: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=900",
          subPhotos: [
            "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=600",
          ],
        },
      ],
    },
  },

  gallery: [
    {
      id: "g1",
      title: "การประชุมจัดทำแผนพัฒนาคุณภาพการศึกษาและหลักสูตรสถานศึกษา",
      category: "มาตรฐานตำแหน่ง (ด้านที่ ๑)",
      description: "ประชุมคณะกรรมการสถานศึกษาและคณะครูเพื่อร่วมยกร่างแผนปฏิบัติการและปรับปรุงหลักสูตร",
      imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=900",
    },
    {
      id: "g2",
      title: "การนิเทศ กำกับ ติดตามการจัดการเรียนรู้เชิงรุก (Active Learning)",
      category: "มาตรฐานตำแหน่ง (ด้านที่ ๑)",
      description: "ผู้อำนวยการเข้าเยี่ยมนิเทศชั้นเรียนและให้กำลังใจแก่คุณครูทุกกลุ่มสาระการเรียนรู้",
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900",
    },
    {
      id: "g3",
      title: "การขับเคลื่อนระบบดูแลช่วยเหลือนักเรียนและตรวจเยี่ยมความปลอดภัย",
      category: "มาตรฐานตำแหน่ง (ด้านที่ ๒)",
      description: "ตรวจมาตรการความปลอดภัยและประสานงานร่วมกับทีมระบบดูแลช่วยเหลือนักเรียน 5 ขั้นตอน",
      imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=900",
    },
    {
      id: "g4",
      title: "การประชุมผู้ปกครองและภาคีเครือข่ายร่วมพัฒนาสถานศึกษา",
      category: "มาตรฐานตำแหน่ง (ด้านที่ ๔)",
      description: "เสริมสร้างสายสัมพันธ์ระหว่างบ้านกับโรงเรียน ระดมทรัพยากรเพื่อการพัฒนาผู้เรียน",
      imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=900",
    },
    {
      id: "g5",
      title: "กิจกรรมชุมชนการเรียนรู้ทางวิชาชีพ (PLC) และการอ่านออกเขียนได้",
      category: "มาตรฐานตำแหน่ง (ด้านที่ ๕)",
      description: "เป็นผู้นำแลกเปลี่ยนเรียนรู้การจัดกิจกรรม 'อ่านเขียนดี มีใจรัก' เพื่อยกระดับภาษาไทย",
      imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=900",
    },
    {
      id: "g6",
      title: "การดำเนินงานสถานศึกษาปลอดภัยด้วย PPK Safe & Care Model",
      category: "ประเด็นท้าทายที่ ๑",
      description: "ซักซ้อมแผนเผชิญเหตุและการเฝ้าระวังความปลอดภัยเชิงรุกร่วมกับเจ้าหน้าที่ สภ. ในพื้นที่",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=900",
    },
    {
      id: "g7",
      title: "การฝึกทักษะอาชีพของนักเรียน (ม.๑ - ม.๖) ตามแนวเศรษฐกิจพอเพียง",
      category: "ประเด็นท้าทายที่ ๒",
      description: "นักเรียนลงมือฝึกทักษะอาชีพ ผลิตน้ำดื่ม ขนมเบเกอรี่ และตลาดนัดนักเรียน",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=900",
    },
  ],
};
