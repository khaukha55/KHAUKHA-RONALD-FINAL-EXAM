const toyList = [
	{
		id: 1,
		toyTitle: "The River and the Source",
    toyDescription: "A captivating multigenerational saga that explores the lives of four women and their struggles amidst the changing landscape of Kenya.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/1.jpg",
			imgSourceSite: "",
			imgSourceSiteUrl:
				"https://unsplash.com/photos/egZ6d-f0Dg0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			imgSourceCreator: "Nong",
			imgSourceCreatorUrl:
				"https://unsplash.com/@californong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
		},
	},
	{
		id: 2,
		toyTitle: "Abyssinian Chronicles",
    toyDescription: " by Moses Isegawa (Uganda) - A powerful and humorous account of a young man's journey through the tumultuous years of Idi Amin's regime in Uganda.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/2.jpg",
			imgSourceSite: "Unsplash",
			imgSourceSiteUrl:
				"https://unsplash.com/wallpapers/design/marble?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			imgSourceCreator: "Gurble Tan",
			imgSourceCreatorUrl:
				"https://unsplash.com/@gurble?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
		},
	},
	{
		id: 3,
		toyTitle: "Petals of Blood",
    toyDescription: "by Ngũgĩ wa Thiong'o (Kenya) - A compelling tale of four friends seeking justice and equality in post-colonial Kenya, uncovering corruption and abuse of power.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/3.jpg",
			imgSourceSite: "Unsplash",
			imgSourceSiteUrl:
				"https://unsplash.com/photos/tvuFYFSyv2A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			imgSourceCreator: "Adam Valstar",
			imgSourceCreatorUrl:
				"https://unsplash.com/@adamvalstar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
		},
	},
	{
		id: 4,
		toyTitle: "Season of Rains",
    toyDescription: "by Uwem Akpan (Nigeria, based in East Africa) - A heart-wrenching collection of stories set in Africa, capturing the resilience of people facing adversity during the rainy season.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/4.jpg",
			imgSourceSite: "Pixabay",
			imgSourceSiteUrl:
				"https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2179905",
			imgSourceCreator: "Luginbuhlta",
			imgSourceCreatorUrl:
				"https://pixabay.com/users/luginbuhlta-4915425/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2179905",
		},
	},
	{
		id: 5,
		toyTitle: "Devil on the Cross",
    toyDescription: "by Ngũgĩ wa Thiong'o (Kenya) - A powerful critique of Kenyan society, following a woman's journey to confront the forces of capitalism, corruption, and exploitation.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/11.jpg",
			imgSourceSite: "Pexels",
			imgSourceSiteUrl: "https://www.pexels.com",
			imgSourceCreator: "Pexels",
			imgSourceCreatorUrl:
				"https://www.pexels.com/photo/green-ball-on-sand-257970/",
		},
	},
	{
		id: 6,
		toyTitle: "Dust",
    toyDescription: "by Yvonne Adhiambo Owuor (Kenya) - A gripping novel that delves into the aftermath of Kenya's post-election violence, exploring themes of family, loss, and redemption.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/5.jpg",
			imgSourceSite: "Pexels",
			imgSourceSiteUrl: "https://www.pexels.com",
			imgSourceCreator: "Cottonbro Studio",
			imgSourceCreatorUrl:
				"https://www.pexels.com/photo/hula-hoop-on-the-wooden-floor-lit-by-daylight-7201147/",
		},
	},
	{
		id: 7,
		toyTitle: "The Beauty of the Heart",
    toyDescription: " by Abdulrazak Gurnah (Tanzania) - A poignant exploration of love, identity, and the immigrant experience in East Africa.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/6.jpg",
			imgSourceSite: "Unsplash",
			imgSourceSiteUrl:
				"https://unsplash.com/photos/mPjPZmEfohI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			imgSourceCreator: "Stoica Ionela",
			imgSourceCreatorUrl:
				"https://unsplash.com/ko/@pupile_gustative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
		},
	},
	{
		id: 8,
		toyTitle: "The Joys of Exile",
    toyDescription: "by Jackee Budesta Batanda (Uganda) - A collection of short stories that delve into the lives of Ugandans both at home and in the diaspora.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/7.jpg",
			imgSourceSite: "Unsplash",
			imgSourceSiteUrl:
				"https://unsplash.com/photos/vIs2yPOsHhs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			imgSourceCreator: "7AV 7AV",
			imgSourceCreatorUrl:
				"https://unsplash.com/@antonov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
		},
	},
	{
		id: 9,
		toyTitle: "The Headline That Morning",
    toyDescription: "by Parselelo Kantai (Kenya) - A gripping novel that delves into the darker side of Kenya's political landscape, exposing the consequences of power and corruption.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/8.jpg",
			imgSourceSite: "Pexels",
			imgSourceSiteUrl: "https://www.pexels.com",
			imgSourceCreator: "Winstead",
			imgSourceCreatorUrl:
				"https://www.pexels.com/photo/close-up-shot-of-an-abacus-6692906/",
		},
	},
	{
		id: 10,
		toyTitle: "The Barefoot Woman",
    toyDescription: "by Scholastique Mukasonga (Rwanda, based in East Africa) - A poignant memoir that explores the life and legacy of a remarkable Rwandan woman, drawing on the author's own childhood memories.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/9.jpg",
			imgSourceSite: "Pixabay",
			imgSourceSiteUrl:
				"https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2398918",
			imgSourceCreator: "Екатерина",
			imgSourceCreatorUrl:
				"https://pixabay.com/users/katya36-4824045/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2398918",
		},
	},
	
	
	
	
	
	
	
	
	
	{
		id: 20,
		toyTitle: " The Dictator's Shadow",
    toyDescription: "by Angelo Izama (Uganda) - A compelling and insightful examination of Ugandan President Yoweri Museveni's rule, exploring the complexities of power, corruption, and the struggle for democracy in modern Uganda. This book delves into the political landscape of Uganda, shedding light on the controversial figure of Museveni and the impact of his regime on the country's development and the lives of its people.",
    toyPrice: Math.floor(Math.random() * (31 - 1) + 1),
		toyImg: {
			img: "images/productImages/10.jpg",
			imgSourceSite: "Pixabay",
			imgSourceSiteUrl:
				"https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3691566",
			imgSourceCreator: "Júlio Cesar J.Cesar",
			imgSourceCreatorUrl:
				"https://pixabay.com/users/jcesar713-198032/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3691566",
		},
	},
];

export default toyList
