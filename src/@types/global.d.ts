interface BecomplianceForm {
    create_form(options: { client: string, form: string }): void;
}

interface Window {
    becompliance_form?: BecomplianceForm;
}
