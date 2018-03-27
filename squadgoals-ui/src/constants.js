const PLATFORMS = [{display: "PC", value: "pc"}, {display: "XBOX", value: "xbox"} ];

const PLAYER_COLORS = ["yellow", "red", "blue", "green"];

const REGIONS = [
    {
        display: "Asia",
        value: "as",
        supportedOn: [ "pc", "xbox"]
    },
    {
        display: "Europe",
        value: "eu",
        supportedOn: [ "pc", "xbox"]
    },
    {
        display: "North America",
        value: "na",
        supportedOn: [ "pc", "xbox"]
    },
    {
        display: "Oceana",
        value: "oc",
        supportedOn: [ "pc", "xbox"]
    },
    {
        display: "Korea / Japan",
        value: "krjp",
        supportedOn: [ "pc" ]
    },
    {
        display: "Kakao",
        value: "kakao",
        supportedOn: [ "pc" ]
    },
    {
        display: "South East Asia",
        value: "sea",
        supportedOn: [ "pc" ]
    },
    {
        display: "South and Central America",
        value: "sa",
        supportedOn: [ "pc" ]
    }
];

export { PLATFORMS, PLAYER_COLORS, REGIONS };