import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  BlobProvider,
} from "@react-pdf/renderer";
import { useHolidays } from "../holidays/useHolidays";
import { useEmployees } from "../employees/useEmployees";

import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    marginBottom: 10,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    fontSize: 10,
    borderBottom: "1px solid #ccc",
  },
  colhead: {
    flex: 1,
    backgroundColor: "#ccc",
    fontWeight: "bold",
    padding: 4,
  },
  col: {
    flex: 1,
    padding: 4,
  },
});

function PlanHolidays({ holidays }) {
  return (
    <View style={styles.section}>
      <Text style={styles.subtitle}>Holidays</Text>
      <View style={[styles.flex, { borderBottom: "none" }]}>
        <Text style={styles.colhead}>Title</Text>
        <Text style={styles.colhead}>Date</Text>
        <Text style={styles.colhead}>Description</Text>
      </View>
      {holidays ? (
        holidays.map(({ id, title, date, description }) => (
          <View key={id} style={styles.flex}>
            <Text style={styles.col}>{title}</Text>
            <Text style={styles.col}>
              {new Date(date).toLocaleDateString()}
            </Text>
            <Text style={styles.col}>{description}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.text}>No data</Text>
      )}
    </View>
  );
}

function PlanEmployees({ employees }) {
  return (
    <View style={styles.section}>
      <Text style={styles.subtitle}>Participants</Text>
      <View style={[styles.flex, { borderBottom: "none" }]}>
        <Text style={styles.colhead}>Name</Text>
        <Text style={styles.colhead}>Role</Text>
        <Text style={styles.colhead}>Department</Text>
        <Text style={styles.colhead}>Location</Text>
      </View>
      {employees ? (
        employees.map(({ id, fullName, role, department, location }) => (
          <View key={id} style={styles.flex}>
            <Text style={styles.col}>{fullName}</Text>
            <Text style={styles.col}>{role}</Text>
            <Text style={styles.col}>{department}</Text>
            <Text style={styles.col}>{location}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.text}>No data</Text>
      )}
    </View>
  );
}

function PlanPdf({ plan, holidays, employees }) {
  return (
    <Document title={`${plan.title} - Holiday Plan Manager`}>
      <Page size="A4" style={styles.page}>
        <View style={[styles.section, { borderBottom: "1px solid #ccc" }]}>
          <Text style={styles.title}>{plan.title}</Text>
          <Text style={styles.description}>{plan.description}</Text>
        </View>
        <PlanHolidays holidays={holidays} />
        <PlanEmployees employees={employees} />
      </Page>
    </Document>
  );
}

function GeneratePdf({ plan }) {
  const { holidays, isLoading: isLoadingHolidays } = useHolidays(
    plan.id,
    false
  );
  const { employees, isLoading: isLoadingEmployees } = useEmployees(
    plan.teamId,
    false
  );

  if (isLoadingHolidays || isLoadingEmployees) return <Spinner />;

  return (
    <BlobProvider
      document={
        <PlanPdf plan={plan} holidays={holidays} employees={employees} />
      }
    >
      {({ url }) => (
        <Button as="a" type="primary" href={url} target="_blank">
          Generate PDF
        </Button>
      )}
    </BlobProvider>
  );
}

export default GeneratePdf;
