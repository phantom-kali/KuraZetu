import {ContributorSection} from "./contributors";
import {Features} from "./features";
import {Hero} from "./hero";
import NavComponent from "./nav";
import ProjectProgressCarousel from "./timeline";
import ResultsDashboard from "../dashboards/results";
import WhyComponent from "./why";
import {useAuth} from "../App";

function LandingPage() {
    const isAuthenticated = useAuth();

    if (isAuthenticated) {
        return (
            <div className="flex flex-col w-full">
                <NavComponent />

                <ResultsDashboard />
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full pt-2">
            <NavComponent />
            <Hero />
            <ProjectProgressCarousel />
            <Features />
            <WhyComponent />
            <ContributorSection />
        </div>
    );
}

export default LandingPage;
