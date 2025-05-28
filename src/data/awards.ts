export interface AwardItem {
  title: string;
  description: string;
  issuer: string;
  date: string;
}

export const awards: AwardItem[] = [
  {
    title: "Graduate Research Fellowship for Master's Student",
    description: "A national fellowship awarded by the NRF to foster Master's students' early research capabilities and academic excellence",
    issuer: "NRF",
    date: "2024 - 2025",
  },
  {
    title: "Outstanding TA Award",
    description: "Teaching assistant for CS206 Data Structure course",
    issuer: "KAIST",
    date: "2024.08",
  },
  {
    title: "Lim Mi-sook Scholarship",
    description: "A scholarship that supports KAIST School of Computing female students who demonstrate outstanding leadership",
    issuer: "KAIST",
    date: "2023.11",
  },
  {
    title: "National Science and Engineering Scholarship",
    description: "A government-funded program in South Korea for outstanding students entering science and engineering fields",
    issuer: "KAIST",
    date: "2018.06",
  },
  {
    title: "KAIST Presidential Fellowship",
    description: "A selective KAIST program supporting top undergraduates with academic excellence and leadership potential to become global science and technology leaders",
    issuer: "KAIST",
    date: "2018 - 2023",
  },
]; 