(function() {var implementors = {};
implementors["lpc55"] = [{"text":"impl Unpin for Command","synthetic":true,"types":[]},{"text":"impl Unpin for CommandTag","synthetic":true,"types":[]},{"text":"impl Unpin for DataPhase","synthetic":true,"types":[]},{"text":"impl Unpin for HidHeader","synthetic":true,"types":[]},{"text":"impl Unpin for ResponseTag","synthetic":true,"types":[]},{"text":"impl Unpin for Response","synthetic":true,"types":[]},{"text":"impl Unpin for ReportId","synthetic":true,"types":[]},{"text":"impl Unpin for Version","synthetic":true,"types":[]},{"text":"impl Unpin for FlashReadMargin","synthetic":true,"types":[]},{"text":"impl Unpin for Key","synthetic":true,"types":[]},{"text":"impl Unpin for KeystoreOperation","synthetic":true,"types":[]},{"text":"impl Unpin for ErrorGroup","synthetic":true,"types":[]},{"text":"impl Unpin for GenericError","synthetic":true,"types":[]},{"text":"impl Unpin for FlashDriverError","synthetic":true,"types":[]},{"text":"impl Unpin for SbLoaderError","synthetic":true,"types":[]},{"text":"impl Unpin for PropertyStoreError","synthetic":true,"types":[]},{"text":"impl Unpin for CrcCheckerError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for GetProperties&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Properties","synthetic":true,"types":[]},{"text":"impl Unpin for Property","synthetic":true,"types":[]},{"text":"impl Unpin for AvailableCommands","synthetic":true,"types":[]},{"text":"impl Unpin for AvailablePeripherals","synthetic":true,"types":[]},{"text":"impl Unpin for PfrKeystoreUpdateOptions","synthetic":true,"types":[]},{"text":"impl Unpin for IrqNotificationPin","synthetic":true,"types":[]},{"text":"impl Unpin for Protocol","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for ResponsePacket","synthetic":true,"types":[]},{"text":"impl Unpin for ReceivedPacket","synthetic":true,"types":[]},{"text":"impl Unpin for Bootloader","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for ProtectedFlash","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; Unpin for FactorySettings&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; Unpin for CustomerSettings&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; Unpin for WrappedFactorySettings&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; Unpin for WrappedCustomerSettings&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for KeystoreHeader","synthetic":true,"types":[]},{"text":"impl Unpin for Keycode","synthetic":true,"types":[]},{"text":"impl Unpin for ActivationCode","synthetic":true,"types":[]},{"text":"impl Unpin for Keystore","synthetic":true,"types":[]},{"text":"impl Unpin for NxpArea","synthetic":true,"types":[]},{"text":"impl Unpin for BootSpeed","synthetic":true,"types":[]},{"text":"impl Unpin for IspMode","synthetic":true,"types":[]},{"text":"impl Unpin for BootConfiguration","synthetic":true,"types":[]},{"text":"impl Unpin for UsbId","synthetic":true,"types":[]},{"text":"impl Unpin for TrustzoneMode","synthetic":true,"types":[]},{"text":"impl Unpin for SecureBootConfiguration","synthetic":true,"types":[]},{"text":"impl Unpin for PrinceConfiguration","synthetic":true,"types":[]},{"text":"impl Unpin for PrinceSubregion","synthetic":true,"types":[]},{"text":"impl Unpin for RawCustomerData","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; Unpin for CustomerSettingsArea&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Header","synthetic":true,"types":[]},{"text":"impl Unpin for RawVendorUsage","synthetic":true,"types":[]},{"text":"impl Unpin for FactorySettingsProgInProgress","synthetic":true,"types":[]},{"text":"impl Unpin for RotKeysStatus","synthetic":true,"types":[]},{"text":"impl Unpin for PrinceIvCode","synthetic":true,"types":[]},{"text":"impl Unpin for MonotonicCounter","synthetic":true,"types":[]},{"text":"impl Unpin for RotKeyStatus","synthetic":true,"types":[]},{"text":"impl Unpin for DebugSecurityBlanketPolicy","synthetic":true,"types":[]},{"text":"impl Unpin for DebugSecurityPolicy","synthetic":true,"types":[]},{"text":"impl Unpin for DebugSecurityPolicies","synthetic":true,"types":[]},{"text":"impl Unpin for SigningKeySource","synthetic":true,"types":[]},{"text":"impl Unpin for Pki","synthetic":true,"types":[]},{"text":"impl Unpin for WrappedPki","synthetic":true,"types":[]},{"text":"impl Unpin for SigningKey","synthetic":true,"types":[]},{"text":"impl Unpin for PublicKey","synthetic":true,"types":[]},{"text":"impl Unpin for Signature","synthetic":true,"types":[]},{"text":"impl Unpin for CertificateSlot","synthetic":true,"types":[]},{"text":"impl Unpin for CertificateSource","synthetic":true,"types":[]},{"text":"impl Unpin for Certificate","synthetic":true,"types":[]},{"text":"impl Unpin for Certificates","synthetic":true,"types":[]},{"text":"impl Unpin for Sha256Hash","synthetic":true,"types":[]},{"text":"impl Unpin for BootTag","synthetic":true,"types":[]},{"text":"impl Unpin for RawBootCommand","synthetic":true,"types":[]},{"text":"impl Unpin for BootCommandDescriptor","synthetic":true,"types":[]},{"text":"impl Unpin for BootCommand","synthetic":true,"types":[]},{"text":"impl Unpin for Config","synthetic":true,"types":[]},{"text":"impl Unpin for Firmware","synthetic":true,"types":[]},{"text":"impl Unpin for Reproducibility","synthetic":true,"types":[]},{"text":"impl Unpin for Filetype","synthetic":true,"types":[]},{"text":"impl Unpin for Sb21FileParameters","synthetic":true,"types":[]},{"text":"impl Unpin for UnsignedSb21File","synthetic":true,"types":[]},{"text":"impl Unpin for Sb21CommandPart","synthetic":true,"types":[]},{"text":"impl Unpin for SignedSb21File","synthetic":true,"types":[]},{"text":"impl Unpin for Sb21HeaderPart","synthetic":true,"types":[]},{"text":"impl Unpin for CertificateBlockHeader","synthetic":true,"types":[]},{"text":"impl Unpin for Version","synthetic":true,"types":[]},{"text":"impl Unpin for Keyblob","synthetic":true,"types":[]},{"text":"impl Unpin for Sb2Header","synthetic":true,"types":[]},{"text":"impl Unpin for FullCertificateBlockHeader","synthetic":true,"types":[]},{"text":"impl Unpin for SignedImage","synthetic":true,"types":[]},{"text":"impl Unpin for ImageSigningRequest","synthetic":true,"types":[]},{"text":"impl Unpin for HttpConfig","synthetic":true,"types":[]},{"text":"impl Unpin for Server","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()