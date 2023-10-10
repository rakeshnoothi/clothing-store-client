import Card from "../../../components/Card";

const List = () => {
    return (
        <div
            id="list-wrapper"
            // desktop to mobile approached grid
            className="grow p-4 grid gap-4 max-[640px]:grid-cols-1 max-[840px]:grid-cols-2 max-[1050px]:grid-cols-3 lg:grid-cols-4"
        >
            <Card cardData={{ category: "men" }} />
            <Card cardData={{ category: "men" }} />
            <Card cardData={{ category: "men" }} />
            <Card cardData={{ category: "men" }} />
            <Card cardData={{ category: "men" }} />
        </div>
    );
};
export default List;
