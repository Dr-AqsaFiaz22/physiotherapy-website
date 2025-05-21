import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function PhysiotherapyWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Dr. Aqsa Fiaz PT - Physiotherapist</h1>
        <p className="text-lg text-gray-600">
          Practicing at WE Care Clinic | Helping You Move Better
        </p>
        <p className="text-sm text-gray-500">
          44-E Gul-e-Daman, Khaki Shah Chowk, College Road | draqsafiaz@gmail.com | 0315 4980760
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-700">
              I am a licensed physiotherapist with a specialization in orthopedic manual
              therapy. Currently practicing at WE Care Clinic in Lahore, I have over 5 years
              of clinical experience. My goal is to provide effective, personalized treatment
              plans for patients to recover from injuries, manage pain, and regain function.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Manual Therapy</li>
              <li>Postural Correction</li>
              <li>Rehabilitation Exercises</li>
              <li>Sports Injury Recovery</li>
              <li>Electrotherapy</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input type="text" placeholder="Full Name" required className="col-span-2" />
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" required />
              <Input type="date" required />
              <Input type="time" required />
              <Textarea placeholder="Describe your concern..." className="col-span-2" />
              <Button className="col-span-2">Submit Appointment</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-gray-500">
        © 2025 Dr. Aqsa Fiaz PT | WE Care Clinic | draqsafiaz@gmail.com | 0315 4980760
      </footer>
    </div>
  );
}
