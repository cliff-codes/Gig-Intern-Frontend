
import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/user/marketplace/components/Banner";
import HistoryItem from "views/user/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import Avatar1 from "assets/img/avatars/avatar12.jfif";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Trending Courses
              </Text>
              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#art'>
                  Art
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#music'>
                  Music
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#collectibles'>
                  Software development
                </Link>
                <Link color={textColorBrand} fontWeight='500' to='#sports'>
                  Marketing
                </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              <NFT
                name='Soft Skills'
                author='Complete this program to discover how to succeed as a Acadium marketer.'
                bidders={[
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,

                ]}
                image={Nft1}
                currentbid='EASY'
                download='#'
              />
              <NFT
                name='Digital Marketing'
                author='This program will show you how to apply basic and advanced marketing concepts to small businesses.'
                bidders={[
                                   Avatar1,
                                   Avatar1,
                                   Avatar1,
                                   Avatar1,
                                   Avatar1,
                                   Avatar1,
                                   Avatar1,
                                   Avatar1,
                                   Avatar1,
                                   Avatar1,

                ]}
                image={Nft2}
                currentbid='EASY'
                download='#'
              />
              <NFT
                name='Website Design '
                author='Learn how to create stunning sites for your business using popular website development platforms.'
                bidders={[
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,

                ]}
                image={Nft3}
                currentbid='EASY'
                download='#'
              />
            </SimpleGrid>
            <Text
              mt='45px'
              mb='36px'
              color={textColor}
              fontSize='2xl'
              ms='24px'
              fontWeight='700'>
              Recently Added Courses
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap='20px'
              mb={{ base: "20px", xl: "0px" }}>
              <NFT
                name='Marketing Analysis'
                author='Discover how to use analytics to improve the effectiveness of your marketing campaigns.'
                bidders={[
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,

                ]}
                image={Nft4}
                currentbid='InterMediate'
                download='#'
              />
              <NFT
                name='Public Relations'
                author='Learn about the Public Relations basics, strategies and best practices for incorporating into a marketing campaign.'
                bidders={[
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,

                ]}
                image={Nft5}
                currentbid='EASY'
                download='#'
              />
              <NFT
                name='Podcast Management'
                author='Today, tools can help streamline activities such as finding guests, publishing audio, and promoting episodes.'
                bidders={[
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,

                ]}
                image={Nft6}
                currentbid='HARD'
                download='#'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
        
          <Card p='0px'>
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify='space-between'
              w='100%'
              px='22px'
              py='18px'>
              <Text color={textColor} fontSize='xl' fontWeight='600'>
                Course History
              </Text>
              <Button variant='action'>See all</Button>
            </Flex>

            <HistoryItem
              name='Flutter Development'
              author='By Mark Benjamin'
              date='30s ago'
              image={Nft5}
            />
            <HistoryItem
              name='Copy-Writing'
              author='By Esthera Jackson'
              date='58s ago'
              image={Nft1}
            />
            <HistoryItem
              name='Graphic Design'
              author='By Nick Wilson'
              date='1m ago'
              image={Nft2}
            />
            <HistoryItem
              name='Email Marketing'
              author='By Peter Will'
              date='1m ago'
              image={Nft4}
            />
            <HistoryItem
              name='Content Marketing'
              author='By Will Smith'
              date='2m ago'
              image={Nft3}
            />
            <HistoryItem
              name='Laravel Framework'
              author='By Manny Gates'
              date='3m ago'
              image={Nft6}
            />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}
