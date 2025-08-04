import CheckInForm from "../components/CheckInForm";
import AIAssistant from "../components/AIAssistant";
import QueueDisplay from "../components/QueueDisplay";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🏥 PatientFlux AI</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <CheckInForm />
        <QueueDisplay />
        <AIAssistant />
      </div>
    </main>
  );
}
