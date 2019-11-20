const TakeMeHome = ({ title, ...props }) => {
  return (
    <>
      <div
        class="cityimage"
        style={{
          backgroundImage: `url(/static/${city}.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div class="currentweather">
          <CityName city={city} />
          <TextLink linkType="changecitylink" onButtonClick={onTextLinkClick}>
            Change
          </TextLink>
          <CurrentTemperature temperature={temperature} />
          {/* <RandoBox /> */}
          <div class="color-divider"></div>
        </div>
      </div>
    </>
  );
};

export default TakeMeHome;
