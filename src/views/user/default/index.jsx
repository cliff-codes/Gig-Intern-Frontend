// Chakra imports
import {
  Avatar,
  Box,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import avatar from "assets/img/avatars/avatar12.jfif";

import React from "react";
import CheckTable from "views/user/default/components/CheckTable";
import ComplexTable from "views/user/default/components/ComplexTable";
import PieCard from "views/user/default/components/PieCard";
import Tasks from "views/user/default/components/Tasks";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/user/default/variables/columnsData";
import tableDataCheck from "views/user/default/variables/tableDataCheck.json";
import tableDataComplex from "views/user/default/variables/tableDataComplex.json";

export default function UserReports() {
  return (
    <Box  pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='10px'
        mb='10px'>
        <MiniStatistics
          startContent={
          
            <Avatar
            src={avatar}
            h="200px"
            w="200px"
          />
            
            }

          name='Application Review Stauts'
          value='In Process'
        />
        <MiniStatistics
          startContent={
            <><IconBox />Your application is been processed, you will be notified soon, when our team complete your application review.
            While waiting you can make sure to take our skill test programs, to make verifieng easy and fast. Thank you.
            </>
            
          }
        />
         <Button
              me='100%'
              mb='50px'
              w='140px'
              minW='140px'
              mt={{ base: "20px", "2xl": "auto" }}
              variant='brand'
              fontWeight='500'>
              Give a feedback
            </Button>
            <Button
              me='100%'
              mb='5px'
              w='140px'
              minW='140px'
              mt={{ base: "20px", "2xl": "auto" }}
              variant='brand'
              fontWeight='500'>
              Download App
            </Button>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
            
      </SimpleGrid>
    
      
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
