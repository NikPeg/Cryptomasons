import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Merry Franklin — writer, editor & consultant.
			</title>
			<meta name={"description"} content={"I can help you choose the right image and present yourself correctly."} />
			<meta property={"og:title"} content={"Merry Franklin — writer, editor & consultant."} />
			<meta property={"og:description"} content={"I can help you choose the right image and present yourself correctly."} />
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
				display="flex"
				sm-width="70%"
				empty-min-height="64px"
				empty-border-width="1px"
				align-items="center"
				lg-width="50%"
				empty-min-width="64px"
			>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--light">
					Melly Franklin
				</Text>
			</Box>
			<Box
				align-items="center"
				lg-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="flex"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="70%"
				sm-width="30%"
			>
				<Components.QuarklycommunityKitMobileSidePanel>
					<Override slot="Content" justify-content="flex-end" background="--color-dark" padding="0px 0px 0px 0px" />
					<Override slot="Button Text" md-font="500 20px/1.3 --fontFamily-serifTimes" md-text-transform="uppercase" md-color="--light" />
					<Override slot="Button Icon" md-color="--light" />
					<Box
						display="flex"
						justify-content="flex-end"
						align-items="center"
						md-flex-direction="column"
						md-padding="20px 0px 20px 0px"
					>
						<Link href="#" text-decoration-line="initial" color="--lightD1" font="--base">
							Facebook
						</Link>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--lightD1"
							font="--base"
							margin="0px 0px 0px 20px"
							md-margin="20px 0px 0px 0px"
						>
							LinkedIn
						</Link>
						<Link
							color="--lightD1"
							font="--base"
							margin="0px 0px 0px 20px"
							md-margin="20px 0px 0px 0px"
							href="#"
							text-decoration-line="initial"
						>
							Twitter
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section padding="50px 0 100px 0" quarkly-title="HeroBlock">
			<Image
				object-position="50% 75%"
				width="100%"
				src="https://images.unsplash.com/photo-1519242220831-09410926fbff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
				order="0"
				margin="0px 0px 80px 0px"
				height="600px"
				align-self="auto"
				flex="0 1 auto"
				display="block"
				object-fit="cover"
			/>
			<Text
				margin="0px 0px 0px 0"
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				sm-text-align="center"
				sm-margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				color="--lightD1"
				font="--headline1"
				md-text-align="center"
				sm-font="normal 700 32px/1.3 &quot;Inter&quot;, sans-serif"
			>
				Sorry, but the page you requested cannot be found. Error #404.{"\n\n"}
			</Text>
		</Section>
		<Section padding="50px 0 100px 0">
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
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						01
					</Text>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
				>
					<Text
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
					>
						Fashion
					</Text>
				</Box>
			</Box>
			<Box
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Box
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
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
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
					>
						Beauty
					</Text>
				</Box>
			</Box>
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
				margin="0px 0px 46px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						03
					</Text>
				</Box>
				<Box
					width="65%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
				>
					<Text
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
					>
						Culture
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
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
				>
					<Text color="--light" margin="0px 0px 0px 0px" font="normal 600 18px/1.5 --fontFamily-googleInter">
						04
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
						margin="0px 0px 0px 0px"
						width="100%"
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						color="--lightD1"
					>
						View on Magazine
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
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="35%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
				>
					<Text font="normal 600 18px/1.5 --fontFamily-googleInter" color="--light" margin="0px 0px 0px 0px">
						05
					</Text>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					display="flex"
					width="65%"
				>
					<Text
						md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
						sm-font="normal 700 38px/1.1 &quot;Inter&quot;, sans-serif"
						font="--headline1"
						color="--lightD1"
						margin="0px 0px 0px 0px"
						width="100%"
					>
						Consultant
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="48px 0 48px 0">
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				justify-content="flex-end"
				sm-flex-wrap="wrap"
			>
				<Box
					width="25%"
					lg-width="33.333%"
					sm-width="100%"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					padding="16px 16px 16px 16px"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Box margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1535361109-b8fa03822e9d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat" height="0" />
					<Text as="h3" font="--base" margin="5px 0 0px 0" color="--lightD1">
						Town & Country
					</Text>
					<Text as="p" margin="20px 0 5px 0" color="--lightD2">
						Couture Trends to Try Now
					</Text>
				</Box>
				<Box
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-color="LightGray"
					lg-width="33.333%"
					empty-min-width="64px"
					width="25%"
					padding="16px 16px 16px 16px"
					sm-width="100%"
					empty-border-style="solid"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1549298222-1c31e8915347?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 50% 0/cover no-repeat" />
					<Text color="--lightD1" as="h3" font="--base" margin="5px 0 0px 0">
						W Magazine
					</Text>
					<Text color="--lightD2" as="p" margin="20px 0 5px 0">
						A Visual Diary of Couture Week
					</Text>
				</Box>
				<Box
					empty-min-width="64px"
					empty-min-height="64px"
					width="25%"
					padding="16px 16px 16px 16px"
					lg-width="33.333%"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					sm-width="100%"
				>
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat" />
					<Text font="--base" margin="5px 0 0px 0" color="--lightD1" as="h3">
						Refinery
					</Text>
					<Text margin="20px 0 5px 0" color="--lightD2" as="p">
						How Archive Fashion Came to Dominate TikTok
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="150px 0 150px 0" sm-align-items="center" md-padding="60px 0 60px 0">
			<Override slot="SectionContent" lg-align-items="center" sm-justify-content="center" align-items="flex-end" />
			<Link
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				lg-margin="0px 0px 0px 0px"
				href="#"
				text-decoration-line="initial"
				sm-font="normal 700 34px/1.1 &quot;Inter&quot;, sans-serif"
				border-width="0 0 1px 0"
				border-style="solid"
				sm-margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				color="--light"
				border-color="--color-light"
				font="--headline1"
				sm-text-align="center"
				margin="0px 10% 0px 0px"
			>
				Let's work tgther!
			</Link>
		</Section>
		<Section quarkly-title="Footer" padding="90px 0 90px 0" sm-padding="74px 0 74px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-direction="column" md-align-items="center" />
			<Box
				md-padding="16px 16px 16px 16px"
				empty-border-color="LightGray"
				width="33.333%"
				display="flex"
				md-justify-content="center"
				md-align-items="center"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text margin="0px 0px 0px 0px" font="--base" color="--light" sm-text-align="center">
					Melly Franklin
				</Text>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				width="33.333%"
				md-align-items="center"
				md-justify-content="center"
				md-padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				display="flex"
			>
				<Text
					font="--base"
					color="--light"
					sm-text-align="center"
					md-text-align="center"
					margin="0px 0px 0px 0px"
				>
					+1 (705) 177-58-55
					<br />
					melly@fbfranklin.com
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="33.333%"
				display="flex"
				md-align-items="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				md-justify-content="center"
				md-padding="16px 16px 16px 16px"
				md-width="100%"
			>
				<Text
					sm-text-align="center"
					md-text-align="center"
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
				>
					123 Demo Street New York,{" "}
					<br />
					NY 12345
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