export type Work = {
  imagePath: string;
  title: string;
  details: {
    content: string;
    challenge: string;
    outlook: string;
    language: string;
    github: string;
  };
};

export const WorkList: Work[] = [
  {
    imagePath: "Portfolio.png",
    title: "Portfolioサイト",
    details: {
      content: "「簡潔に」を意識して作ったポートフォリオサイト。",
      challenge: "初個人開発 / react-vertical-timelineとの格闘",
      outlook: " サイトの更新 / DBをFirebaseに格納",
      language: "Next.js / TypeScript",
      github: "https://github.com/yuto99999/yuto-portfolio",
    },
  },
  {
    imagePath: "SeikeiCircle.png",
    title: "成蹊大学サークル紹介サイト",
    details: {
      content:
        "大学1年時に自分に合ったサークルを見つける難しさ実感し、その経験から生まれたサークル一覧サイト",
      challenge:
        "Next.js, TypeScript, MUI, Splideに初挑戦 / ユーザー体験を第一に考えたデザインを試行錯誤",
      outlook:
        "DBをsupabaseに格納 / サークルだけではなく体育会の掲載 / 大学側との話し合い / デプロイ",
      language: "Next.js / TypeScript",
      github: "https://github.com/Peach-Tech0927/seikei_org_list",
    },
  },
  {
    imagePath: "TNA-APP.png",
    title: "出退勤管理アプリ TNA-APP",
    details: {
      content:
        "「もし自分が管理者だったら、、、」と考え作成した、出退勤の管理に関する機能を複数兼ね備えたアプリ",
      challenge: "Firebaseに初挑戦 / Vercelでデプロイ",
      outlook: "機能の修正と追加",
      language: "React / TypeScript",
      github: "https://github.com/yuto99999/tna-app",
    },
  },
];
