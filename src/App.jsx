import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f3f4f6",
      }}
    >
      {/* SIDEBAR */}
      {sidebarOpen && (
        <aside
          style={{
            width: "230px",
            backgroundColor: "#064e3b",
            color: "white",
            padding: "20px 16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "999px",
                backgroundColor: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              🐔
            </div>
            <div style={{ marginLeft: 10 }}>
              <div style={{ fontSize: 13, opacity: 0.85 }}>Poultry Monitoring</div>
              <div style={{ fontSize: 11, opacity: 0.7 }}>and Control System</div>
            </div>
          </div>

          <nav>
            <SidebarButton
              label="Dashboard"
              active={activePage === "dashboard"}
              onClick={() => setActivePage("dashboard")}
            />
            <SidebarButton
              label="Early Warnings"
              active={activePage === "alerts"}
              onClick={() => setActivePage("alerts")}
            />
            <SidebarButton
              label="Farmer Profile"
              active={activePage === "profile"}
              onClick={() => setActivePage("profile")}
            />
            <SidebarButton
              label="Settings"
              active={activePage === "settings"}
              onClick={() => setActivePage("settings")}
            />
          </nav>
        </aside>
      )}

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, padding: "16px 22px" }}>
        {/* TOP BAR */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: 22,
                color: "#111827",
              }}
            >
              Poultry Monitoring and Control System
            </h1>
            <p
              style={{
                margin: "4px 0 0",
                fontSize: 13,
                color: "#6b7280",
              }}
            >
              Broiler house environmental monitoring, early warning, and control dashboard
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                padding: "4px 10px",
                borderRadius: "999px",
                backgroundColor: "#e5e7eb",
                fontSize: 11,
                color: "#374151",
              }}
            >
              Phase: <strong>Grow-out</strong>
            </div>
            <button
              onClick={() => setSidebarOpen((prev) => !prev)}
              style={{
                border: "none",
                borderRadius: 999,
                padding: "7px 12px",
                fontSize: 12,
                cursor: "pointer",
                backgroundColor: "#10b981",
                color: "white",
              }}
            >
              {sidebarOpen ? "Hide Menu" : "Show Menu"}
            </button>
          </div>
        </header>

        {/* OWNER INFO */}
        <section
          style={{
            marginBottom: 16,
            padding: "10px 14px",
            borderRadius: 10,
            backgroundColor: "white",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "#374151",
          }}
        >
          <div>
            <strong>Owner:</strong> Kuya Emil &nbsp;|&nbsp; Sta. Maria, Bulacan &nbsp;|&nbsp;
            2 years broiler poultry house owner
          </div>
          <div
            style={{
              padding: "4px 10px",
              borderRadius: 999,
              backgroundColor: "#dcfce7",
              fontSize: 11,
              color: "#166534",
            }}
          >
            System status: Normal
          </div>
        </section>

        {/* PAGES */}
        {activePage === "dashboard" && <DashboardPage />}

        {activePage === "alerts" && <AlertsPage />}

        {activePage === "profile" && <ProfilePage />}

        {activePage === "settings" && <SettingsPage />}
      </main>
    </div>
  );
}

/* ----- DASHBOARD PAGE ----- */

function DashboardPage() {
  return (
    <>
      {/* LIVE PARAMETERS */}
      <section style={{ marginBottom: 20 }}>
        <h2
          style={{
            fontSize: 16,
            marginBottom: 10,
            color: "#111827",
          }}
        >
          Live Environment Parameters
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
          }}
        >
          <Card
            title="Temperature"
            value="29.2 °C"
            status="Within range"
            statusColor="#16a34a"
            note="Target 28–30 °C"
          />
          <Card
            title="Humidity"
            value="72 %"
            status="Within range"
            statusColor="#16a34a"
            note="Target 60–80 %"
          />
          <Card
            title="Ammonia"
            value="8 ppm"
            status="Safe"
            statusColor="#16a34a"
            note="Limit ≤ 10 ppm"
          />
          <Card
            title="Methane"
            value="1.4 ppm"
            status="Normal"
            statusColor="#16a34a"
            note="Monitoring only"
          />
          <Card
            title="Fan speed"
            value="1450 rpm"
            status="Auto (PID)"
            statusColor="#0ea5e9"
            note="Exhaust fan"
          />
          <Card
            title="Lighting"
            value="ON"
            status="Daytime schedule"
            statusColor="#f59e0b"
            note="Lux within target"
          />
        </div>
      </section>

      {/* CONTROLS & SETPOINTS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.4fr)",
          gap: 14,
        }}
      >
        {/* Controls */}
        <div
          style={{
            padding: 14,
            borderRadius: 10,
            backgroundColor: "white",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              fontSize: 15,
              margin: "0 0 8px",
              color: "#111827",
            }}
          >
            Manual Controls (Testing)
          </h3>
          <p
            style={{
              fontSize: 12,
              margin: "0 0 10px",
              color: "#6b7280",
            }}
          >
            For demonstration and professor testing – actual control is still automatic via
            PID and logic in the controller.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <ControlButton label="Toggle Fans (Override)" />
            <ControlButton label="Toggle Lights" />
            <ControlButton label="Start Pressure Washer (45 s)" />
          </div>
        </div>

        {/* Setpoints */}
        <div
          style={{
            padding: 14,
            borderRadius: 10,
            backgroundColor: "white",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              fontSize: 15,
              margin: "0 0 8px",
              color: "#111827",
            }}
          >
            Setpoints (Demo values)
          </h3>
          <div style={{ fontSize: 13, color: "#374151" }}>
            <div style={{ marginBottom: 6 }}>
              Temperature setpoint: <strong>29 °C</strong>
            </div>
            <div style={{ marginBottom: 6 }}>
              Humidity setpoint: <strong>70 %</strong>
            </div>
            <div style={{ marginBottom: 6 }}>
              Ammonia threshold: <strong>10 ppm</strong>
            </div>
            <p
              style={{
                fontSize: 11,
                marginTop: 10,
                color: "#6b7280",
              }}
            >
              In the final system, these values will be editable here and saved to Firebase
              to update the PID and control logic.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ----- ALERTS PAGE ----- */

function AlertsPage() {
  return (
    <section
      style={{
        padding: 14,
        borderRadius: 10,
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          fontSize: 16,
          margin: "0 0 10px",
          color: "#111827",
        }}
      >
        Early Warning Notifications
      </h2>
      <p
        style={{
          fontSize: 12,
          margin: "0 0 10px",
          color: "#6b7280",
        }}
      >
        Sample layout where ML/threshold-based warnings will appear. This section can show
        both active and historical alerts for the broiler house.
      </p>

      <ul style={{ paddingLeft: 18, fontSize: 13, color: "#374151" }}>
        <li>08:15 – Ammonia slightly elevated, monitor ventilation.</li>
        <li>06:40 – Temperature above target for 10 minutes (Grow-out phase).</li>
        <li>Yesterday – Fan RPM deviation detected compared to PID output (resolved).</li>
      </ul>
    </section>
  );
}

/* ----- PROFILE PAGE ----- */

function ProfilePage() {
  return (
    <section
      style={{
        padding: 16,
        borderRadius: 10,
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        maxWidth: 480,
      }}
    >
      <h2
        style={{
          fontSize: 16,
          margin: "0 0 10px",
          color: "#111827",
        }}
      >
        Farmer Profile
      </h2>
      <p style={{ fontSize: 14, color: "#374151", margin: "4px 0" }}>
        <strong>Name:</strong> Kuya Emil
      </p>
      <p style={{ fontSize: 14, color: "#374151", margin: "4px 0" }}>
        <strong>Location:</strong> Sta. Maria, Bulacan
      </p>
      <p style={{ fontSize: 14, color: "#374151", margin: "4px 0" }}>
        <strong>Experience:</strong> 2 years broiler poultry house owner
      </p>
      <p style={{ fontSize: 13, color: "#6b7280", marginTop: 8 }}>
        This section can later load real farmer information and production history from the
        database. For now, it documents the actual partner farm used in the study.
      </p>
    </section>
  );
}

/* ----- SETTINGS PAGE ----- */

function SettingsPage() {
  return (
    <section
      style={{
        padding: 16,
        borderRadius: 10,
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        maxWidth: 480,
      }}
    >
      <h2
        style={{
          fontSize: 16,
          margin: "0 0 10px",
          color: "#111827",
        }}
      >
        System Settings (Demo)
      </h2>
      <p style={{ fontSize: 13, color: "#374151", margin: "4px 0" }}>
        • Control mode: <strong>Automatic (PID-based)</strong>
      </p>
      <p style={{ fontSize: 13, color: "#374151", margin: "4px 0" }}>
        • Manual override: Enabled for testing via web dashboard
      </p>
      <p style={{ fontSize: 13, color: "#6b7280", marginTop: 8 }}>
        In the final implementation, configuration values (phase schedule, setpoints,
        alert limits) can be changed here and synchronized with the controller via
        Firebase.
      </p>
    </section>
  );
}

/* ----- REUSABLE COMPONENTS ----- */

function SidebarButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        textAlign: "left",
        padding: "9px 10px",
        marginBottom: 6,
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        backgroundColor: active ? "#10b981" : "transparent",
        color: "white",
        fontSize: 13,
      }}
    >
      {label}
    </button>
  );
}

function Card({ title, value, status, statusColor, note }) {
  return (
    <div
      style={{
        padding: 12,
        borderRadius: 10,
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <h3
        style={{
          fontSize: 13,
          margin: "0 0 4px",
          color: "#6b7280",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 20,
          fontWeight: "bold",
          margin: 0,
          color: "#111827",
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontSize: 12,
          margin: "4px 0 0",
          color: statusColor || "#16a34a",
        }}
      >
        {status}
      </p>
      <p
        style={{
          fontSize: 11,
          margin: "4px 0 0",
          color: "#9ca3af",
        }}
      >
        {note}
      </p>
    </div>
  );
}

function ControlButton({ label }) {
  return (
    <button
      style={{
        padding: "9px 14px",
        borderRadius: 999,
        border: "none",
        cursor: "pointer",
        backgroundColor: "#10b981",
        color: "white",
        fontSize: 13,
      }}
      onClick={() => alert(`${label} (demo only, final version via Firebase)`)}
    >
      {label}
    </button>
  );
}

export default App;
