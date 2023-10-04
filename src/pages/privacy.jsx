import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SiteLayout from "@/components/site/SiteLayout";
import styled from "@emotion/styled";

const Title = styled("h2")(() => ({
  color: "#414141",
  fontSize: 36,
  fontWeight: 600,
  marginBottom: 24,
}));

const Content = styled("p")(() => ({
  color: "#7A7A7A",
  fontSize: 24,
  fontWeight: 600,
  marginTop: 0,
  marginBottom: 40,
}));

const Page = () => {
  return (
    <>
      <section>
        <Container>
          <Typography
            fontWeight={700}
            fontSize={38}
            color={"primary"}
            component={"h1"}
            mb={10}
          >
            Privacy Policy
          </Typography>

          <Grid container>
            <Grid item xs={12} md={8}>
              <Box maxWidth={890}>
                <Box>
                  <Title>Information Collection</Title>
                  <Content>
                    This section describes the types of personal information
                    that the company collects from users. This can include
                    things like names, email addresses, contact information,
                    demographic data, and more.
                  </Content>
                </Box>

                <Box>
                  <Title>Data Usage</Title>
                  <Content>
                    The policy should detail how the collected data will be
                    used. This might include purposes such as providing
                    services, improving products, personalizing user
                    experiences, and sending promotional material.
                  </Content>
                </Box>

                <Box>
                  <Title>Data Sharing</Title>
                  <Content>
                    This part explains if and how the company shares user data
                    with third parties. It might list the types of third parties
                    (like vendors, partners, or service providers) with whom
                    data is shared and for what reasons.
                  </Content>
                </Box>

                <Box>
                  <Title>Cookies and Tracking</Title>
                  <Content>
                    If the company uses cookies or similar tracking
                    technologies, this section should explain what they are used
                    for, how users can manage them, and their purpose in data
                    collection.
                  </Content>
                </Box>

                <Box>
                  <Title>User Rights</Title>
                  <Content>
                    Users have certain rights regarding their data, such as the
                    right to access, correct, delete, or restrict their personal
                    information. This section should explain how users can
                    exercise these rights.
                  </Content>
                </Box>

                <Box>
                  <Title>Policy Changes</Title>
                  <Content>
                    The policy might state that it can be updated or changed
                    over time. Companies usually inform users about any
                    significant changes to the policy and when they will take
                    effect.
                  </Content>
                </Box>

                <Box>
                  <Title>Contact Information</Title>
                  <Content>
                    The privacy policy should provide contact information
                    (email, address, etc.) for users to reach out if they have
                    questions or concerns about their data.
                  </Content>
                </Box>

                <Box>
                  <Title>Legal Basis</Title>
                  <Content>
                    Depending on the jurisdiction, companies might be required
                    to specify the legal basis for processing personal data,
                    such as consent or legitimate interest.
                  </Content>
                </Box>

                <Box>
                  <Title>Applicable Laws</Title>
                  <Content>
                    The policy may include information about the laws and
                    regulations that govern data protection in the company’s
                    operating jurisdiction.
                  </Content>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src="/privacy.svg" alt="test" />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Page;
