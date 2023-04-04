// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/user/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        General Information
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
      Hi, am Michael Agyei Addai. A Computer Science bachelor of science student. With some skills in web and mobile development with also a zeal to learn more about marketing in addition to my skills. Would like to gain skills in the fields of social media marketing, paid advertisement and that of affiliate marketing to...
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Education'
          value='Kwame Nkrumah University Of Science And Technology'
        />
        <Information
          boxShadow={cardShadow}
          title='Languages'
          value='English, Twi, Ga-Adangbe'
        />
        <Information
          boxShadow={cardShadow}
          title='Department'
          value='Software Development'
        />
        <Information
          boxShadow={cardShadow}
          title='Work History'
          value='Google, Facebook'
        />
        <Information
          boxShadow={cardShadow}
          title='Organization'
          value='MpactLane Consult'
        />
        <Information
          boxShadow={cardShadow}
          title='Birthday'
          value='01 April 2004'
        />
      </SimpleGrid>
    </Card>
  );
}
