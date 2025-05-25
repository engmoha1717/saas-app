import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import React from 'react'
import {getSubjectColor} from "@/lib/utils";
import  {recentSessions} from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
            {/* {companions.map((companion) => ( */}
                <CompanionCard
                id="1"
                name="Companion 1"
                topic="Topic 1"
                subject="Subject 1"
                duration={45}
                // color="red"
                color={getSubjectColor("Subject 1")}

                    // key={companion.id}
                    // {...companion}
                    // color={getSubjectColor(companion.subject)}
                />
                <CompanionCard
                id="2"
                name="Companion 2"
                topic="Topic 2"
                subject="Subject 2"
                duration={45}
                // color="blue"
                color={getSubjectColor("Subject 2")}

                    // key={companion.id}
                    // {...companion}
                    // color={getSubjectColor(companion.subject)}
                />
                <CompanionCard
                id="3"
                name="Companion 3"
                topic="Topic 3"
                subject="Subject 3"
                duration={45}
                // color="green"
                color={getSubjectColor("Subject 3")}

                    // key={companion.id}
                    // {...companion}
                    // color={getSubjectColor(companion.subject)}
                />
            {/* ))} */}

        </section>

        <section className="home-section">
            <CompanionsList
                  title="Recently completed sessions"
                  companions={recentSessions}
                  classNames="w-2/3 max-lg:w-full"
            />
            <Cta />
        </section>
    </main>
  )
}

export default Page