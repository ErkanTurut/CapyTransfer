import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
import FlexBetween from "../utils/FlexBetween";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAuth0 } from "@auth0/auth0-react";
import { useSignIn } from "@clerk/clerk-react";
export const WalletConnectButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!isAuthenticated) {
                return (
                  <Button
                    variant="contained"
                    onClick={() => loginWithRedirect()}
                  >
                    Login
                  </Button>
                );
              }
              // if (chain.unsupported) {
              //   return (
              //     <Button
              //       variant="contained"
              //       onClick={openChainModal}
              //       type="button"
              //     >
              //       Wrong network
              //     </Button>
              //   );
              // }
              return (
                <FlexBetween sx={{ gap: 1 }}>
                  {/* <Button
                    onClick={openChainModal}
                    variant="outlined"
                    color="neutral"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button> */}
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Logout
                  </Button>
                </FlexBetween>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

{
  /* <ConnectButton.Custom>
{({
  account,
  chain,
  openAccountModal,
  openChainModal,
  openConnectModal,
  authenticationStatus,
  mounted,
}) => {
  // Note: If your app doesn't use authentication, you
  // can remove all 'authenticationStatus' checks
  const ready = mounted && authenticationStatus !== "loading";
  const connected =
    ready &&
    account &&
    chain &&
    (!authenticationStatus || authenticationStatus === "authenticated");
  return (
    <div
      {...(!ready && {
        "aria-hidden": true,
        style: {
          opacity: 0,
          pointerEvents: "none",
          userSelect: "none",
        },
      })}
    >
      {(() => {
        if (!connected) {
          return (
            <Button variant="contained" onClick={openConnectModal}>
              Connect
            </Button>
          );
        }
        if (chain.unsupported) {
          return (
            <Button
              variant="contained"
              onClick={openChainModal}
              type="button"
            >
              Wrong network
            </Button>
          );
        }
        return (
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={openChainModal}
              style={{ display: "flex", alignItems: "center" }}
              type="button"
            >
              {chain.hasIcon && (
                <div
                  style={{
                    background: chain.iconBackground,
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    overflow: "hidden",
                    marginRight: 4,
                  }}
                >
                  {chain.iconUrl && (
                    <img
                      alt={chain.name ?? "Chain icon"}
                      src={chain.iconUrl}
                      style={{ width: 12, height: 12 }}
                    />
                  )}
                </div>
              )}
              {chain.name}
            </button> *
            <Button variant="contained" onClick={openAccountModal}>
              {account.displayName}
            </Button>
          </div>
        );
      })()}
    </div>
  );
}}
</ConnectButton.Custom> */
}
