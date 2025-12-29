import { IconType } from "react-icons";
import {
  SiKotlin, SiAndroid, SiSqlite, SiFirebase, SiGooglemaps,
  SiMongodb, SiAmazon, SiNodedotjs, SiExpress, SiReact,
  SiNextdotjs, SiAngular, SiTailwindcss, SiFigma,
  SiGradle, SiGithubactions, SiFastlane, SiDocker,
  SiLinux, SiGit, SiGithub, SiJunit5,
  SiSocketdotio, SiStripe, SiLetsencrypt
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  { name: "Kotlin", icon: SiKotlin },
  { name: "Java", icon: FaJava },
  { name: "Jetpack Compose", icon: SiAndroid },
  { name: "Coroutines", icon: SiKotlin },
  { name: "Flow", icon: SiKotlin },
  { name: "StateFlow", icon: SiKotlin },
  { name: "SharedFlow", icon: SiKotlin },
  { name: "MVVM", icon: SiAndroid },
  { name: "Clean Architecture", icon: SiAndroid },

  { name: "Room", icon: SiAndroid },
  { name: "SQLite", icon: SiSqlite },
  { name: "WorkManager", icon: SiAndroid },

  { name: "Hilt", icon: SiAndroid },
  { name: "Dagger", icon: SiAndroid },
  { name: "Koin", icon: SiKotlin },

  { name: "Retrofit", icon: SiAndroid },
  { name: "OkHttp", icon: SiAndroid },
  { name: "Glide", icon: SiAndroid },
  { name: "Coil", icon: SiAndroid },
  { name: "Socket.IO", icon: SiSocketdotio },

  { name: "Firebase Auth", icon: SiFirebase },
  { name: "Firestore", icon: SiFirebase },
  { name: "FCM", icon: SiFirebase },
  { name: "Crashlytics", icon: SiFirebase },
  { name: "Cloud Functions", icon: SiFirebase },

  { name: "Google Maps", icon: SiGooglemaps },
  { name: "Payment Integrations", icon: SiStripe },
  { name: "Security", icon: SiLetsencrypt },
  { name: "Encryption", icon: SiLetsencrypt },

  { name: "Kotlin Multiplatform", icon: SiKotlin },
  { name: "Compose Multiplatform", icon: SiAndroid },
  { name: "Ktor", icon: SiKotlin },
  { name: "Kamel", icon: SiKotlin },

  // { name: "Node.js", icon: SiNodedotjs },
  // { name: "Express", icon: SiExpress },
  // { name: "MongoDB", icon: SiMongodb },
  // { name: "AWS S3", icon: SiAmazon },

  // { name: "React", icon: SiReact },
  // { name: "Next.js", icon: SiNextdotjs },
  // { name: "Angular", icon: SiAngular },
  // { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Figma", icon: SiFigma },
  { name: "UX", icon: SiFigma },

  { name: "Gradle", icon: SiGradle },
  { name: "CI/CD", icon: SiGithubactions },
  // { name: "Fastlane", icon: SiFastlane },
  // { name: "Docker", icon: SiDocker },
  // { name: "Linux", icon: SiLinux },

  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },

  { name: "JUnit", icon: SiJunit5 },
  { name: "MockK", icon: SiKotlin },
  { name: "Espresso", icon: SiAndroid },
  { name: "Turbine", icon: SiKotlin }
];
