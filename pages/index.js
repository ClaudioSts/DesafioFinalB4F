export default function Home() {
  return (


    <div className={styles.container}>
      <LoginUser />
      <LoginCompany />
      <SignUpUser />
      <signUpCompanies />
      <FormularioComSubmit />
      <CustomButtonWithModal buttonTitle="Login Modal" modalTitle="Login Modal">
        <Login />
      </CustomButtonWithModal>
      <CustomDivWithModal divText="Check the applications here...">
        Check the applications here...
      </CustomDivWithModal>

    </div>
  )
}