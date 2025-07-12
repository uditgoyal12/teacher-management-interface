import { TeacherProvider } from "@/context/TeacherContext"
import "../styles/globals.css"; 
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TeacherProvider>
          {/* Now context is globally available */}
                  <Navbar />  
          {children}
        </TeacherProvider>
      </body>
    </html>
  );
}
