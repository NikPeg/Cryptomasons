import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Cryptomasonry of Northern Butovo
			</title>
			<meta name={"description"} content={"We are cryptomasons of Northern Butovo. By order of Master Mason, we bring Light into Darkness and share Technology with people."} />
			<meta property={"og:title"} content={"Cryptomasonry of Northern Butovo"} />
			<meta property={"og:description"} content={"We are cryptomasons of Northern Butovo. By order of Master Mason, we bring Light into Darkness and share Technology with people."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/og-image-portfolio.png?v=2021-10-07T09:34:08.202Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/32x32.png?v=2021-10-07T09:34:24.098Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/152x152.png?v=2021-10-07T09:34:31.980Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60da14fa3f4eb1001ea27689/images/270x270.png?v=2021-10-07T09:34:41.365Z"} />
			<meta name={"msapplication-TileColor"} content={"#04080C"} />
		</Helmet>
		<Section padding="40px 0 40px 0" quarkly-title="Header">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				display="flex"
				justify-content="space-between"
			/>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="30%"
				align-items="center"
				lg-width="50%"
				sm-width="70%"
				empty-border-width="1px"
				empty-min-height="64px"
				display="flex"
				empty-min-width="64px"
			>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--light">
					Cryptomasonry of Northern Butovo
				</Text>
			</Box>
			<Box
				width="70%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				display="flex"
				align-items="center"
				lg-width="50%"
				sm-width="30%"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Components.QuarklycommunityKitMobileSidePanel>
					<Override slot="Content" justify-content="flex-end" background="--color-dark" padding="0px 0px 0px 0px" />
					<Override slot="Button Text" md-color="--light" md-font="--base" md-text-transform="uppercase" />
					<Override slot="Button Icon" md-color="--light" />
					<Box
						display="flex"
						justify-content="flex-end"
						align-items="center"
						md-flex-direction="column"
						md-padding="20px 0px 20px 0px"
					>
						<Link href="#" text-decoration-line="initial" color="--lightD1" font="--base">
							Instagram
						</Link>
						<Link
							margin="0px 0px 0px 20px"
							md-margin="20px 0px 0px 0px"
							href="#"
							text-decoration-line="initial"
							color="--lightD1"
							font="--base"
						>
							Telegram
						</Link>
						<Link
							md-margin="20px 0px 0px 0px"
							href="#"
							text-decoration-line="initial"
							color="--lightD1"
							font="--base"
							margin="0px 0px 0px 20px"
						>
							VKontakte
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section quarkly-title="HeroBlock" padding="50px 0 100px 0">
			<Image
				align-self="auto"
				order="0"
				height="600px"
				margin="0px 0px 80px 0px"
				object-fit="cover"
				width="100%"
				src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/bb908d55641923.598ca983e0d27.jpg"
				flex="0 1 auto"
				display="block"
			/>
			<Text
				sm-margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0"
				color="--lightD1"
				md-text-align="center"
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				sm-text-align="center"
				font="--headline1"
				sm-font="normal 700 32px/1.3 &quot;Inter&quot;, sans-serif"
			>
				We are cryptomasons of Northern Butovo. By order of Master Mason, we bring Light into Darkness and share Technology with people.
			</Text>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				sm-flex-direction="column"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
			>
				<Box
					empty-border-color="LightGray"
					display="flex"
					width="20%"
					empty-min-width="64px"
					empty-border-style="solid"
					sm-width="100%"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-height="64px"
					empty-border-width="1px"
				>
					<Hr width="100%" color="--light" />
				</Box>
				<Box
					empty-min-height="64px"
					empty-border-width="1px"
					display="flex"
					justify-content="center"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="20%"
					sm-width="100%"
					sm-justify-content="flex-start"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						Who we are?
					</Text>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					width="60%"
					sm-width="100%"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
				>
					<Text
						font="--headline4"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						md-font="500 20px/1.3 --fontFamily-googleInter"
						sm-width="100%"
					>
						You can find a lot of information about masonry in the Internet. Most of it is a lie. You won't hear the truth even from us. You will hear from us only one thing ??? The Way to the Future. The Technology.
					</Text>
				</Box>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-color="LightGray"
				margin="86px 0px 0px 0px"
				sm-flex-direction="column"
				empty-min-width="64px"
				empty-min-height="64px"
				flex-wrap="wrap"
				sm-margin="32px 0px 0px 0px"
				empty-border-style="solid"
				display="flex"
			>
				<Box
					empty-border-style="solid"
					sm-width="100%"
					empty-border-width="1px"
					empty-min-height="64px"
					empty-border-color="LightGray"
					display="flex"
					width="20%"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
				>
					<Text margin="0px 0px 0px 0px" font="normal 300 18px/1.5 --fontFamily-googleInter" color="--light">
						4268.6506
					</Text>
				</Box>
				<Box
					empty-min-height="64px"
					empty-border-width="1px"
					width="20%"
					sm-padding="0px 0px 16px 0px"
					sm-width="100%"
					sm-justify-content="flex-start"
					empty-min-width="64px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					justify-content="center"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						Why?
					</Text>
				</Box>
				<Box
					sm-padding="0px 0px 16px 0px"
					display="flex"
					sm-justify-content="flex-start"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="60%"
					sm-width="100%"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text color="--lightD1" margin="0px 0px 0px 0px" md-font="500 20px/1.3 --fontFamily-googleInter" font="--headline4">
						The goals of the Brotherhood are hidden not only from you, but also from us. There is only the order of the Master Mason, which we must follow. That's why the Technology got into your hands.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Box
					display="flex"
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						01
					</Text>
				</Box>
				<Box
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
					empty-min-width="64px"
				>
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Tyler
					</Text>
				</Box>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Box
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						02
					</Text>
				</Box>
				<Box
					empty-border-color="LightGray"
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
				>
					<Text
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Stewards
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Box
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
				>
					<Text margin="0px 0px 0px 0px" font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light">
						03
					</Text>
				</Box>
				<Box
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
				>
					<Text
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Deacons
					</Text>
				</Box>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
			>
				<Box
					display="flex"
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						04
					</Text>
				</Box>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Secretary
					</Text>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Box
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						05
					</Text>
				</Box>
				<Box
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
				>
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Treasurer
					</Text>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Box
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						06
					</Text>
				</Box>
				<Box
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
				>
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Junior Warden
					</Text>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Box
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						07
					</Text>
				</Box>
				<Box
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
				>
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Senior Warden
					</Text>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Box
					width="35%"
					sm-width="20%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						08
					</Text>
				</Box>
				<Box
					display="flex"
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
				>
					<Text
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Worshipful Master
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="50px 0 100px 0">
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				sm-flex-direction="column"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Box
					sm-justify-content="flex-start"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					sm-width="100%"
					empty-min-width="64px"
					empty-min-height="64px"
					width="20%"
					sm-padding="0px 0px 16px 0px"
				>
					<Hr width="100%" color="--light" />
				</Box>
				<Box
					display="flex"
					sm-width="100%"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="20%"
					justify-content="center"
					sm-justify-content="flex-start"
					empty-min-width="64px"
					empty-min-height="64px"
					sm-padding="0px 0px 16px 0px"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						Details
					</Text>
				</Box>
				<Box
					empty-border-color="LightGray"
					width="60%"
					sm-width="100%"
					sm-justify-content="flex-start"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					display="flex"
					sm-padding="0px 0px 16px 0px"
				>
					<Text
						font="--headline4"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						md-font="500 20px/1.3 --fontFamily-googleInter"
						sm-width="100%"
					>
						We also publish a grain of information on social networks.
						<br />
						<br />
						However, we would like to draw your attention: all the information provided on this website, as well as on our pages in social networks, pursues only one goal ??? the execution of the order of the Master of Masons. Don't expect to see the Truth here.
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				flex-wrap="wrap"
				margin="86px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				sm-margin="32px 0px 0px 0px"
				empty-min-height="64px"
				empty-border-width="1px"
				sm-flex-direction="column"
			>
				<Box
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-border-width="1px"
					display="flex"
					sm-width="100%"
					sm-justify-content="flex-start"
					empty-min-height="64px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="20%"
				>
					<Hr width="100%" color="--light" />
				</Box>
				<Box
					sm-width="100%"
					empty-border-style="solid"
					display="flex"
					empty-border-width="1px"
					empty-border-color="LightGray"
					width="20%"
					justify-content="center"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text margin="0px 0px 0px 0px" font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light">
						About
					</Text>
				</Box>
				<Box
					empty-border-style="solid"
					width="60%"
					empty-border-width="1px"
					empty-border-color="LightGray"
					display="flex"
					sm-width="100%"
					sm-justify-content="flex-start"
					sm-padding="0px 0px 16px 0px"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text font="--headline4" color="--lightD1" margin="0px 0px 0px 0px" md-font="500 20px/1.3 --fontFamily-googleInter">
						Follow the white rabbit. He will lead you to the Light. Follow us. To see its source.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="48px 0 48px 0">
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				justify-content="flex-end"
				sm-flex-wrap="wrap"
				empty-min-width="64px"
			>
				<Box
					empty-min-height="64px"
					empty-border-color="LightGray"
					width="25%"
					padding="16px 16px 16px 16px"
					sm-width="100%"
					empty-min-width="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					lg-width="33.333%"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://img.welt.de/img/politik/mobile101451767/6382503057-ci102l-w1024/Bush-Putin-2001-apec-shanghai-2-DW-Vermischtes-Shanghai-jpg.jpg) 50% 0/cover no-repeat" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						Town & Country
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						Russian Federation, Moscow, Nothern Butovo
					</Text>
				</Box>
				<Box
					empty-border-color="LightGray"
					width="25%"
					sm-width="100%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					padding="16px 16px 16px 16px"
					lg-width="33.333%"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://hsto.org/files/ea9/a3d/4ac/ea9a3d4acf7445e291fc2acf8b80628c.jpg) 50% 0/cover no-repeat" />
					<Text font="--base" margin="5px 0 0px 0" color="--lightD1" as="h3">
						Direction
					</Text>
					<Text color="--lightD2" as="p" margin="20px 0 5px 0">
						Cryptography. The Method of trensonity.
					</Text>
				</Box>
				<Box
					empty-border-style="solid"
					width="25%"
					padding="16px 16px 16px 16px"
					sm-width="100%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-color="LightGray"
					lg-width="33.333%"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://avatars.mds.yandex.net/get-zen_doc/4432928/pub_6123c1fa134e9202756e54f2_6123c27b0e49f4124c1c39c3/scale_1200) 50% 0/cover no-repeat" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						Access level
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						54 degree ??? all people. We are partly open for all.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="150px 0 150px 0" sm-align-items="center" md-padding="60px 0 60px 0">
			<Override slot="SectionContent" align-items="flex-end" lg-align-items="center" sm-justify-content="center" />
			<Link
				border-color="--color-light"
				font="--headline1"
				href="#"
				text-decoration-line="initial"
				color="--light"
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				sm-font="normal 700 34px/1.1 &quot;Inter&quot;, sans-serif"
				sm-margin="0px 0px 0px 0px"
				border-style="solid"
				lg-margin="0px 0px 0px 0px"
				border-width="0 0 1px 0"
				md-margin="0px 0px 0px 0px"
				sm-text-align="center"
				margin="0px 10% 0px 0px"
			>
				Do not look. Do see.
			</Link>
		</Section>
		<Section padding="90px 0 90px 0" sm-padding="74px 0 74px 0" quarkly-title="Footer">
			<Override slot="SectionContent" flex-direction="row" md-flex-direction="column" md-align-items="center" />
			<Box
				empty-border-style="solid"
				width="33.333%"
				md-align-items="center"
				md-justify-content="center"
				md-padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				display="flex"
			>
				<Text color="--light" sm-text-align="center" margin="0px 0px 0px 0px" font="--base">
					Nikolin Sevenny, 33 degree
				</Text>
			</Box>
			<Box
				md-justify-content="center"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				width="33.333%"
				md-align-items="center"
				md-padding="16px 16px 16px 16px"
			>
				<Text
					sm-text-align="center"
					md-text-align="center"
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
				>
					8 (977) 744-??-23
					<br />
					upwahevsf5t8@mail.ru
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="33.333%"
				md-padding="16px 16px 16px 16px"
				md-width="100%"
				empty-border-width="1px"
				empty-border-style="solid"
				display="flex"
				md-align-items="center"
				md-justify-content="center"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
					sm-text-align="center"
					md-text-align="center"
				>
					Russian Federation, Moscow,{" "}
					<br />
					Nothern Butovo
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});