import { NavigationMenuDemo as NavBar } from "@/components/customs/navbar";
import { UserProfile } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

const Page = () => {
	return (
		<>
			<NavBar />
			<main className="p-8">
				<UserProfile />
			</main>
		</>
	);
};

export default Page;
