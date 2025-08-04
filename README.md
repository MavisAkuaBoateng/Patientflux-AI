# Patientflux

> Smart, AI-assisted OPD scheduling and patient flow management for Korle-Bu Teaching Hospital.

---

## 🧠 1. Problem Statement

Korle-Bu’s outpatient department currently operates without structured scheduling or real-time oversight, resulting in:

- Average wait times exceeding 4 hours
- Nearly 20% no-show rate
- No queue visualization or dynamic prioritization

This leads to bottlenecks, clinician guesswork, missed follow-ups, and challenges in identifying high-risk patients on time.

---

## 🚀 2. Solution Overview

**Patientflux** is a 5-pillar cloud-native platform designed to automate and optimize outpatient care:

1. **QR/Mobile Check-In & Dashboards**
   - Patients check-in via QR/mobile app
   - Data feeds into real-time dashboards

2. **Automated Patient Categorization**
   - Tags like *new, follow-up, post-op, high-risk* applied using rules + EMR data

3. **Real-Time Queue Display & Alerts**
   - Live displays and SMS alerts to reduce delays and improve punctuality

4. **Permissioned Blockchain Audit Trail**
   - Hyperledger Fabric logs check-ins, status updates, EMR syncs

5. **AI Workflows & Predictive Analytics**
   - Multi-agent AI forecasts volumes, detects no-shows, recommends slot changes

---

## 👥 3. Who Benefits?

### Direct
- **OPD Admins** – Real-time dashboards + audit logs  
- **Clinicians** – Alerts and auto-prioritization  
- **IT Teams** – FHIR/HL7-ready integration

### Indirect
- **Patients** – Reduced wait + improved care  
- **Payers/Ministry** – Optimized resource use  
- **Regulators** – Transparent audit trails  
- **Partners** – APIs for insurers, device makers, etc.

---

## 🔁 4. Scalability & Integration

- Built with **FHIR + HL7** standards  
- **Cloud-native** (deployable on AWS, Azure, local clouds)  
- Integrates easily with existing EMRs  
- **Modular onboarding** (sandbox testing, super-user training, legal compliance)

---

## 💥 5. Social Impact & Commercial Model

### Social
- 50% drop in wait times
- 30% fewer missed appointments in 6 months
- Fast-track for high-risk patients

### Commercial
- **SaaS Core**: Subscription to scheduling, dashboards, and analytics
- **FaaS Add-ons**: Surge handling, advanced forecasting, live simulations (pay-per-use)

### Success Targets
- 15 hospitals onboarded in Year 1
- 95% clinician adoption rate within 6 months
- 40% ROI by Year 2

---

## 🔍 6. AI Components

- **LLM-Powered Interface** – Ask: “Show today’s new patients”
- **AI Agents** – Automate data ingestion, no-show detection
- **Time-Series Models** – Forecast daily load, no-show risks
- **Reinforcement Learning** – Learn and improve scheduling dynamically

---

## ⚙️ 7. LLM Credits Usage

- **NLP Search** – Convert prompts to database queries
- **Smart Summaries** – Generate KPI briefs
- **Vector Search** – Retrieve past records or imaging logs
- **Smart Contracts** – Auto-generate consent-chaincode
- **Compliance Summaries** – Parse blockchain audit trails
- **Cloud Orchestration** – e.g. “Send logs to S3”
- **Log Parsing** – Spot performance issues in real-time

---

## 🧪 8. Demo Instructions

> Screenshots are located in the `Demo/` folder  
> A walkthrough video is linked [here](#) (optional)  
> Live URL: *(if hosted temporarily on Vercel or Netlify)*

---

## 🛠️ 9. Getting Started

### Requirements
- Node.js
- Git
- Next.js

### Run Locally

```bash
git clone https://github.com/MavisAkuaBoateng/Patientflux-AI.git
cd Patientflux-AI
npm install
npm run dev
