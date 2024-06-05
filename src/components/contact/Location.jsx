"use client"
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Image from "next/image";
import { useMemo } from "react";
const Location = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDFh1g2GhFvl3b_T8G__6C7Qh0pNo_8PdI",
  });
  const center = useMemo(() => ({ lat: 41.1278304, lng: -73.37861321 }), []);

  return (
    <div className="container pt-5 pb-3">
      <div className="location">
        <h3 className="py-3">Discover Semantic Tribe</h3>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="App">
            {!isLoaded ? (
              <></>
            ) : (
              <GoogleMap
                mapContainerClassName="map-container"
                center={center}
                zoom={15}
              >
                <Marker position={{ lat: 41.1278304, lng: -73.37861321 }}
                />
              </GoogleMap>
            )}
          </div>
        </div>

        <div className="col-lg-6 pt-3">
          <div className="headerquaters">
            <h5 className="general">HEADQUARTERS</h5>
            <div className="row py-2">
              <div className="col-2 pt-3">
                <Image
                  src="/location.gif"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt='team'
                />
              </div>
              <div className="col-8">
                <p className="text-white">USA Office : 50 KINGS HIGHWAY SOUTH WESTPORT CONNECTICUT</p>
                <p className="text-white">Pakistan Office : 48 C MODEL TOWN LAHORE PAKISTAN</p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="general">Phone</h5>
            <div className="row py-2">
              <div className="col-2">
                <Image
                  src="/phone.gif"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt='team'
                />
              </div>
              <div className="col-8 pt-lg-2">
                <a class="contact-text "
                  href="tel:+14156899833" style={{ textDecoration: "none", color: "black" }}>
                  <b>+1 (415) 689-9833</b> </a>
                <div>


                  <a class="contact-text pt-1"
                    href="tel:+923028490697" style={{ textDecoration: "none", color: "black" }}>
                    <b>+923028490697</b> </a>
                </div>
              </div>
            </div>
          </div>
          <div >
            <h5 className="general">GENERAL ENQUIRIES</h5>
            <div className="row py-1">
              <div className="col-2">
                <Image
                  src="mail.gif"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt='team'
                />
              </div>
              <div className="col-8 pt-lg-4 pt-2">
                <a class="contact-text"
                  href="mailto:Info@semantictribe.com" style={{ textDecoration: "none", color: "black" }}>
                  <b>Info@semantictribe.com</b> </a>
              </div>
            </div>
          </div>
          <div>
            <h5 className="general">SOCIAL</h5>
            <div className="row py-2 ">
              <div className="col-2 text-center social">
                <div className="">
                  <a href="https://pk.linkedin.com/company/semantictribe" >
                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.82 1.5H3.294c-.957 0-1.794.69-1.794 1.635v17.566c0 .951.837 1.799 1.794 1.799h17.521c.963 0 1.685-.854 1.685-1.8V3.136c.006-.946-.722-1.635-1.68-1.635ZM8.01 19.005H5V9.65h3.01v9.354ZM6.61 8.228h-.022c-.963 0-1.586-.716-1.586-1.613C5.002 5.7 5.642 5 6.626 5c.984 0 1.587.695 1.608 1.614 0 .897-.624 1.613-1.625 1.613Zm12.395 10.777h-3.009V13.89c0-1.225-.438-2.063-1.526-2.063-.832 0-1.324.563-1.543 1.111-.082.197-.104.465-.104.739v5.328H9.815V9.65h3.008v1.301c.438-.623 1.122-1.52 2.713-1.52 1.975 0 3.469 1.301 3.469 4.108v5.465Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-2 text-center social">
                <a href="https://instagram.com/semantictribe?igshid=OGQ5ZDc2ODk2ZA==" >
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.375 3.25a4.388 4.388 0 0 1 4.375 4.375v8.75a4.388 4.388 0 0 1-4.375 4.375h-8.75a4.389 4.389 0 0 1-4.375-4.375v-8.75A4.388 4.388 0 0 1 7.625 3.25h8.75Zm0-1.75h-8.75C4.256 1.5 1.5 4.256 1.5 7.625v8.75c0 3.369 2.756 6.125 6.125 6.125h8.75c3.369 0 6.125-2.756 6.125-6.125v-8.75c0-3.369-2.756-6.125-6.125-6.125Z"></path>
                    <path d="M17.688 7.625a1.313 1.313 0 1 1 0-2.625 1.313 1.313 0 0 1 0 2.625Z"></path>
                    <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z"></path>
                  </svg>
                </a>
              </div>
              <div className="col-2 text-center social">
                <a href="https://www.facebook.com/semanticnerds/" >
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M22.5 12.063c0-5.799-4.702-10.5-10.5-10.5s-10.5 4.7-10.5 10.5c0 5.24 3.84 9.584 8.86 10.373v-7.337H7.692v-3.037h2.666V9.75c0-2.63 1.568-4.085 3.966-4.085 1.15 0 2.351.205 2.351.205v2.584h-1.324c-1.304 0-1.712.81-1.712 1.64v1.97h2.912l-.465 3.036H13.64v7.337c5.02-.788 8.859-5.131 8.859-10.373Z" clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
              <div className="col-2 text-center social">
                <a href="https://twitter.com/SemanticTribe" >
                  <svg width="40" height="40" className='footertext' fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.25 5.133a9.46 9.46 0 0 1-2.65.717 4.57 4.57 0 0 0 2.03-2.512c-.908.53-1.9.903-2.932 1.101A4.647 4.647 0 0 0 16.327 3c-2.55 0-4.615 2.034-4.615 4.542a4.37 4.37 0 0 0 .119 1.036A13.158 13.158 0 0 1 2.315 3.83a4.485 4.485 0 0 0-.627 2.283c0 1.574.821 2.967 2.062 3.782a4.57 4.57 0 0 1-2.1-.567v.056c0 2.204 1.595 4.036 3.704 4.454a4.752 4.752 0 0 1-1.216.159c-.291 0-.582-.028-.868-.085.587 1.805 2.294 3.118 4.315 3.155a9.356 9.356 0 0 1-6.835 1.88A13.063 13.063 0 0 0 7.816 21c8.501 0 13.146-6.923 13.146-12.928 0-.197-.006-.394-.015-.586a9.304 9.304 0 0 0 2.303-2.353Z"></path>
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>


    </div>
  );
};

export default Location;