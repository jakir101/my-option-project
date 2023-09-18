import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to cardio equipment",
                "Free weights area",
                "Locker room access",
                "Unlimited water station usage",
                "Discounts on gym apparel"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 50,
            "features": [
                "Access to all gym equipment",
                "Group fitness classes",
                "Personal trainer sessions (2/month)",
                "Sauna and spa access",
                "Towel service",
                "Nutrition consultation",
                "Access to exclusive members' events"
            ]
        },
        {
            "id": 3,
            "name": "Student Membership",
            "price": 25,
            "features": [
                "Access to cardio equipment",
                "Free weights area",
                "Locker room access",
                "Valid student ID required",
                "Access during non-peak hours"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "price": 80,
            "features": [
                "Access for two adults and two children",
                "Access to all gym equipment",
                "Group fitness classes",
                "Sauna and spa access",
                "Towel service",
                "Childcare service during workouts",
                "Family fitness classes"
            ]
        }
    ]
    return (
        <div>
            <h2 className="text-4xl mt-10">Best Prices In The Town</h2>
            <div className="grid md:grid-cols-2 
            lg:grid-cols-3 gap-5">
            {
                priceOptions.map(option => <PriceOption
                    key={option.id}
                    option={option}
                ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;