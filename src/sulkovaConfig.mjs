export const EMPLOYEES = [
  {
    id: "lea-ledecka",
    name: "Mgr. Lea Ledecká",
    exportName: "Lea_Ledecka",
    globalFte: 1,
  },
  {
    id: "josef-jakubec",
    name: "Bc. Josef Jakubec",
    exportName: "Josef_Jakubec",
    globalFte: 1,
  },
  {
    id: "radka-vyslouzilova",
    name: "Mgr. Radka Vysloužilová, DiS.",
    exportName: "Radka_Vyslouzilova",
    globalFte: 1,
  },
];

export const EMPLOYEE = EMPLOYEES[0];

export const PROJECTS = {
  "moravsky-beroun-socialni-prace": {
    projectId: "moravsky-beroun-socialni-prace",
    shortName: "MB_SOC_PRACE",
    name: "Podpora sociální práce v Moravském Berouně II.",
    englishName: "",
    regNumber: "CZ.03.02.01/00/25_106/0006125",
    program: "Operační program Zaměstnanost plus",
    call: "03_25_106",
    organization: "Město Moravský Beroun",
    organizationId: "00296244",
    legalForm: "",
    address: "náměstí 9. května 4, 793 05 Moravský Beroun",
    statutoryRepresentative: "Ing. Bc. Jan Hicz, DBA",
    realizationPlace: "území města Moravský Beroun a jeho přilehlé části Ondrášov, Sedm Dvorů, Čabová, Nové Valteřice, Norberčany, Stará Libavá, Trhavice, Nová Véska",
    realizationPeriod: "1. 7. 2026 - 30. 6. 2028",
    duration: "24 měsíců",
  },
};

export const ROLES = [
  {
    id: "socialni-pracovnik",
    employeeId: "lea-ledecka",
    projectId: "moravsky-beroun-socialni-prace",
    positionId: "socialni-pracovnik",
    positionName: "Sociální pracovník",
    exportRoleName: "Socialni_pracovnik",
    fte: 1,
    budgetCode: "1.1.1.1",
    contractType: "PS",
    activitySetId: "socialni-pracovnik",
    activities: [
      "Vyhledávání a kontaktování osob v nepříznivé sociální situaci v terénu, mapování jejich potřeb a poskytování základní podpory při řešení sociálního vyloučení, zadlužení, bydlení, zaměstnání, zdraví nebo komunikace s institucemi.",
      "Individuální sociální práce s klientem zaměřená na stabilizaci jeho životní situace, posílení samostatnosti a praktickou podporu při vyřizování dávek, dokladů, bydlení, dluhů, zdravotní péče a dalších osobních záležitostí.",
      "Doprovod klientů při jednání s úřady, sociálními a zdravotními službami, školami, zaměstnavateli nebo dalšími institucemi, včetně podpory klienta při porozumění jeho právům, povinnostem a možnostem řešení situace.",
    ],
  },
  {
    id: "casemanager",
    employeeId: "josef-jakubec",
    projectId: "moravsky-beroun-socialni-prace",
    positionId: "casemanager",
    positionName: "Casemanager",
    exportRoleName: "Casemanager",
    fte: 1,
    budgetCode: "1.1.1.2",
    contractType: "PS",
    activitySetId: "casemanager",
    activities: [
      "Koordinace podpory u klientů s vícečetnými nebo dlouhodobými problémy, u nichž je potřeba sladit postup sociálního pracovníka, návazných služeb, úřadů a dalších zapojených subjektů.",
      "Sestavování a průběžné vyhodnocování individuálního postupu podpory klienta, včetně rozdělení rolí mezi zapojené aktéry a sledování návaznosti jednotlivých kroků směřujících ke stabilizaci situace klienta.",
      "Příprava a vedení případových setkání s klientem a zapojenými institucemi nebo službami, pokud situace klienta vyžaduje mezioborovou spolupráci a společně dohodnutý postup.",
    ],
  },
  {
    id: "odborny-garant",
    employeeId: "radka-vyslouzilova",
    projectId: "moravsky-beroun-socialni-prace",
    positionId: "odborny-garant",
    positionName: "Odborný garant",
    exportRoleName: "Odborny_garant",
    fte: 0,
    monthlyHours: 32,
    budgetCode: "1.1.3.1",
    contractType: "DPP",
    activitySetId: "odborny-garant",
    activities: [
      "Odborné metodické vedení pracovníků projektu při nastavování a sjednocování postupů terénní sociální práce, sociálního poradenství a práce s osobami sociálně vyloučenými nebo sociálním vyloučením ohroženými.",
      "Poskytování odborných konzultací pracovníkům projektu u složitých nebo rizikových klientských situací, zejména při volbě vhodného postupu, vymezení hranic podpory a posouzení návaznosti na odborné služby.",
      "Odborná kontrola kvality poskytované podpory a souladu realizovaných činností s cíli projektu, metodikou práce s cílovou skupinou a pravidly OPZ+ pro přímou práci s klienty.",
    ],
  },
];

export const DEFAULT_ABSENCES = {
  vacation: 0,
  sickLeave: 0,
  otherObstacles: 0,
  otherObstaclesUnit: "days",
  doctorVisitHours: 0,
  holiday: 0,
};
