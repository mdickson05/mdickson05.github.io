import React from 'react';
import { Shield, Users, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Purpose & Background
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-orange-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are establishing a grounds for peace and healing for the civil war-affected citizens of Aqtau to help with long-term psychological recovery.
            </p>
            <div className="flex items-center space-x-3 text-rose-600">
              <Heart className="h-6 w-6" />
              <span className="font-semibold">Healing through Community</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <img 
              src="https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Community gathering" 
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="h-7 w-7 text-red-600 mr-3" />
            What's happening in Bukharestan?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bukharestan has been ravaged by a civil war. Suffering is en-masse; 60% of housing has been destroyed, 750,000 refugees are internally displaced, the youth are largely unemployed, and the people are divided across ethnic lines.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These conditions has provided ample opportunity for organised crime syndicates to rally disenfranchised people, and to mobilise insurgencies and armed militia to destabilise the government's recovery efforts.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                We're trying to turn this tide by providing communal support to the most vulnerable members of Aqtau. Aqtau is outside of active fighting zones, has low risk of insurgent invasion, but has a refugee camp. As such, we think this can be a great place for our efforts to have the most impact, while still mitigating as much risk as we can.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-7 w-7 text-blue-600 mr-3" />
              Who is this for?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our community centre is for everyone - regardless of religion, ethnicity, gender and age. We do have a keen focus on bringing purpose and learning opportunities to the unemployed, vulnerable Bukharaestani youth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We hope that our centre can provide much-needed guidance, and an opportunity to learn useful skills in an otherwise distressing time.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-7 w-7 text-green-600 mr-3" />
              Why a community centre?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bukharestan is a complicated place, with many different ethnic sects. If we were to focus on a specific group of vulnerable people, we risk retaliation. A community centre allows an opportunity for everyone to have their voices heard, not as a member of a religious group, but rather as members of one community, striving for a common goal of peaceful coexistence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It also gives us the advantage of flexibility; if our proposed workshops aren't suitable, we are able to consult with local members to adapt our ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;