/**
 * AchievementsWindow Component
 * Displays achievements as PDFs organized by categories (Certifications, Publications)
 * Layout similar to Finder window with sidebar categories
 */

import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { useState } from "react";

const achievementsByCategory = {
  certifications: [
    {
      id: 1,
      name: "React Master",
      file: "sample1.pdf",
      dateEarned: "Nov 20, 2025",
      icon: "📜",
    },
    {
      id: 2,
      name: "JavaScript Pro",
      file: "sample2.pdf",
      dateEarned: "Nov 18, 2025",
      icon: "📜",
    },
    {
      id: 3,
      name: "Web Development",
      file: "sample3.pdf",
      dateEarned: "Nov 15, 2025",
      icon: "📜",
    },
  ],
  publications: [
    {
      id: 4,
      name: "How to Master React",
      file: "sample1.pdf",
      dateEarned: "Oct 10, 2025",
      icon: "📄",
    },
    {
      id: 5,
      name: "GSAP Animation Guide",
      file: "sample2.pdf",
      dateEarned: "Sep 25, 2025",
      icon: "📄",
    },
    {
      id: 6,
      name: "JavaScript Best Practices",
      file: "sample3.pdf",
      dateEarned: "Sep 05, 2025",
      icon: "📄",
    },
  ],
};

const AchievementsWindowContent = () => {
  const [activeCategory, setActiveCategory] = useState("certifications");
  const [selectedId, setSelectedId] = useState(null);
  const { openWindow } = useWindowStore();

  const currentItems = achievementsByCategory[activeCategory] || [];

  const renderSidebarCategory = (name, categoryKey) => (
    <div key={categoryKey} className="mb-4">
      <h3>{name}</h3>
      <ul>
        {Object.entries(achievementsByCategory).map(([key, items]) => (
          <li
            key={key}
            onClick={() => {
              setActiveCategory(key);
              setSelectedId(null);
            }}
            className={key === activeCategory ? "active" : "not-active"}
          >
            <span className="icon">{key === "certifications" ? "🏆" : "📚"}</span>
            <p className="text-sm font-medium truncate">
              {key === "certifications" ? "Certifications" : "Publications"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );

  /**
   * Handle open achievement PDF in dedicated window
   */
  const handleOpenAchievement = (achievement) => {
    openWindow("achievementpdf", {
      name: achievement.name,
      file: achievement.file,
    });
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="archive" />
        <h2>Achievements</h2>
      </div>

      <div className="bg-white dark:bg-slate-900 flex h-full achievements-finder-layout">
        {/* Sidebar */}
        <div className="sidebar">
          {renderSidebarCategory("Categories", "categories")}
        </div>

        {/* Content Area */}
        <div className="achievements-content">
          {currentItems.length > 0 ? (
            <div className="achievements-grid">
              {currentItems.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`achievement-card ${
                    selectedId === achievement.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedId(achievement.id)}
                >
                  {/* Icon */}
                  <div className="achievement-icon-wrapper">
                    <span className="achievement-icon">{achievement.icon}</span>
                  </div>

                  {/* Info */}
                  <div className="achievement-info">
                    <h4 className="achievement-title">{achievement.name}</h4>
                    <p className="achievement-date">{achievement.dateEarned}</p>
                  </div>

                  {/* Actions */}
                  <div className="achievement-card-actions">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenAchievement(achievement);
                      }}
                      title="Open achievement"
                    >
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="achievements-empty">
              <div className="empty-icon">📭</div>
              <p>No items in this category</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

/**
 * Wrap the content with WindowWrapper to get
 * all window functionality (minimize, maximize, dragging, etc.)
 */
const AchievementsWindow = WindowWrapper(AchievementsWindowContent, "archive");

export default AchievementsWindow;
